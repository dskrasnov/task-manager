import { all } from 'redux-saga/effects';

import fetchTasksSaga from './fetch-tasks';
import createTaskSaga from './create-task';
import loginSaga from './login';
import logoutSaga from './logout';
import readAuthorizationDataSaga from './read-authorization-data';

function* rootSaga() {
  yield all([
    fetchTasksSaga(),
    createTaskSaga(),
    loginSaga(),
    logoutSaga(),
    readAuthorizationDataSaga(),
  ]);
}

export default rootSaga;
