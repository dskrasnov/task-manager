import { call, takeEvery } from 'redux-saga/effects';

import Cookies from 'js-cookie';

import { LOGOUT } from '../constants/action-types';
import { AUTHORIZATION_COOKIE_NAME } from '../constants/commons';

function* logout() {
  yield call(Cookies.remove, AUTHORIZATION_COOKIE_NAME.TOKEN);
  yield call(Cookies.remove, AUTHORIZATION_COOKIE_NAME.TOKEN_EXPIRES);
}

function* logoutSaga() {
  yield takeEvery(LOGOUT, logout);
}

export default logoutSaga;
