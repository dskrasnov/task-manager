import axios from 'axios';
import Cookies from 'js-cookie';

import { call, put, takeEvery, select } from 'redux-saga/effects';

import setDialogBusy from '../action-creators/set-dialog-busy';
import setDialogOpen from '../action-creators/set-dialog-open';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import setDialogGeneralError from '../action-creators/set-dialog-general-error';
import readAuthorizationData from '../action-creators/read-authorization-data';
import showNotification from '../action-creators/show-notification';

import { LOGIN } from '../constants/action-types';

import {
  AUTHORIZATION_COOKIE_NAME,
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
  NOTIFICATION_TYPE,
} from '../constants/commons';

function* login() {
  try {
    yield put(setDialogBusy(DIALOG_NAME.LOGIN, true));

    const { dialogState: { [DIALOG_NAME.LOGIN]: { fieldValue: { username, password } } } } = yield select();

    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    const { data: { message, status } } = yield call(
      axios.post,
      `${BACKEND_URL}login?developer=${DEVELOPER_NAME}`,
      formData,
    );

    switch (status) {
      case BACKEND_STATUS.OK: {
        const tokenExpires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

        yield call(
          Cookies.set,
          AUTHORIZATION_COOKIE_NAME.TOKEN,
          message.token,
          {
            expires: tokenExpires,
            sameSite: 'strict',
          },
        );

        yield call(
          Cookies.set,
          AUTHORIZATION_COOKIE_NAME.TOKEN_EXPIRES,
          tokenExpires,
          {
            expires: tokenExpires,
            sameSite: 'strict',
          },
        );

        yield put(readAuthorizationData());
        yield put(setDialogOpen(DIALOG_NAME.LOGIN, false));
        yield put(showNotification(NOTIFICATION_TYPE.INFO, 'Вы вошли в систему.'));

        break;
      }

      case BACKEND_STATUS.ERROR: {
        yield put(setDialogFieldError(DIALOG_NAME.LOGIN, message));
        yield put(setDialogBusy(DIALOG_NAME.LOGIN, false));

        break;
      }

      default:
        // no default
    }
  } catch (error) {
    yield put(setDialogGeneralError(DIALOG_NAME.LOGIN, 'При входе что-то пошло не так.'));
    yield put(setDialogBusy(DIALOG_NAME.LOGIN, false));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, login);
}

export default loginSaga;
