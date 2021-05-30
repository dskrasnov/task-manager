import { call, put, takeEvery, select } from 'redux-saga/effects';

import Cookies from 'js-cookie';
import axios from 'axios';

import setDialogBusy from '../action-creators/set-dialog-busy';
import setDialogOpen from '../action-creators/set-dialog-open';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import setDialogGeneralError from '../action-creators/set-dialog-general-error';
import logout from '../action-creators/logout';
import showNotification from '../action-creators/show-notification';
import setTasks from '../action-creators/set-tasks';

import { EDIT_TASK } from '../constants/action-types';

import {
  AUTHORIZATION_COOKIE_NAME,
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
  NOTIFICATION_TYPE,
  TASK_STATUS_MASK,
} from '../constants/commons';

function* editTask() {
  try {
    yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, true));

    const token = yield call(Cookies.get, AUTHORIZATION_COOKIE_NAME.TOKEN);

    if (!token) {
      yield put(logout());

      yield put(setDialogGeneralError(
        DIALOG_NAME.TASK_MANAGE,
        'У вас нет прав на редактирование задачи. Войдите в систему и повторите попытку.',
      ));

      yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));

      return;
    }

    const {
      dialogState: {
        [DIALOG_NAME.TASK_MANAGE]: {
          fieldValue: { id, text, oldText, isEdited, isDone },
        },
      },
    } = yield select();

    // eslint-disable-next-line no-bitwise
    const binaryTaskStatus = (isDone && TASK_STATUS_MASK.DONE)
      ^ ((isEdited || text !== oldText) && TASK_STATUS_MASK.EDITED);

    const status = parseInt(binaryTaskStatus.toString(2), 10);

    const formData = new FormData();

    formData.append('text', text);
    formData.append('status', status);
    formData.append('token', token);

    const { data: { message, status: responseStatus } } = yield call(
      axios.post,
      `${BACKEND_URL}edit/${id}?developer=${DEVELOPER_NAME}`,
      formData,
    );

    switch (responseStatus) {
      case BACKEND_STATUS.OK: {
        const { tasks } = yield select();

        yield put(
          setTasks(
            tasks.map(
              task => (task.id === id ? { ...task, text, status, isEdited, isDone } : task),
            ),
          ),
        );

        yield put(setDialogOpen(DIALOG_NAME.TASK_MANAGE, false));
        yield put(showNotification(NOTIFICATION_TYPE.SUCCESS, 'Задача успешно сохранена!'));

        break;
      }

      case BACKEND_STATUS.ERROR: {
        const { token: tokenError, ...rest } = message;

        if (tokenError) yield put(setDialogGeneralError(DIALOG_NAME.TASK_MANAGE, tokenError));

        yield put(setDialogFieldError(DIALOG_NAME.TASK_MANAGE, rest));
        yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));

        break;
      }

      default:
        // no default
    }
  } catch (error) {
    yield put(setDialogGeneralError(DIALOG_NAME.TASK_MANAGE, 'При сохранении задачи что-то пошло не так.'));
    yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));
  }
}

function* editTaskSaga() {
  yield takeEvery(EDIT_TASK, editTask);
}

export default editTaskSaga;
