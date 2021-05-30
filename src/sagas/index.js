import { all } from 'redux-saga/effects';

import fetchTasksSaga from './fetch-tasks';
import createTaskSaga from './create-task';
import loginSaga from './login';
import logoutSaga from './logout';
import readAuthorizationDataSaga from './read-authorization-data';
import readTaskListDataSaga from './read-task-list-data';
import saveTaskListDataSaga from './save-task-list-data';
import editTaskSaga from './edit-task';

function* rootSaga() {
  yield all([
    fetchTasksSaga(),
    createTaskSaga(),
    loginSaga(),
    logoutSaga(),
    readAuthorizationDataSaga(),
    readTaskListDataSaga(),
    saveTaskListDataSaga(),
    editTaskSaga(),
  ]);
}

export default rootSaga;
