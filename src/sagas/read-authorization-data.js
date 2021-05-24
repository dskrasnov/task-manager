import { call, delay, put, takeLatest } from 'redux-saga/effects';

import Cookies from 'js-cookie';

import setAuthorizationState from '../action-creators/set-authorization-state';
import logout from '../action-creators/logout';

import { READ_AUTHORIZATION_DATA } from '../constants/action-types';
import { AUTHORIZATION_COOKIE_NAME } from '../constants/commons';

const getTimeout = dateString => new Date(dateString).getTime() - new Date().getTime();

function* readAuthorizationData() {
  const token = yield call(Cookies.get, AUTHORIZATION_COOKIE_NAME.TOKEN);

  if (!token) return;

  const tokenExpires = yield call(Cookies.get, AUTHORIZATION_COOKIE_NAME.TOKEN_EXPIRES);

  yield put(setAuthorizationState({ isAuthorized: true, tokenExpires }));

  const timeout = yield call(getTimeout, tokenExpires);

  yield delay(timeout);

  yield put(logout());
}

function* readAuthorizationDataSaga() {
  yield takeLatest(READ_AUTHORIZATION_DATA, readAuthorizationData);
}

export default readAuthorizationDataSaga;
