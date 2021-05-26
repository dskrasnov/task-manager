import { call, put, takeEvery } from 'redux-saga/effects';

import Cookies from 'js-cookie';

import showNotification from '../action-creators/show-notification';

import { LOGOUT } from '../constants/action-types';
import { AUTHORIZATION_COOKIE_NAME, NOTIFICATION_TYPE } from '../constants/commons';

function* logout() {
  yield call(Cookies.remove, AUTHORIZATION_COOKIE_NAME.TOKEN);
  yield call(Cookies.remove, AUTHORIZATION_COOKIE_NAME.TOKEN_EXPIRES);

  yield put(showNotification(NOTIFICATION_TYPE.INFO, 'Вы вышли из системы.'));
}

function* logoutSaga() {
  yield takeEvery(LOGOUT, logout);
}

export default logoutSaga;
