import { all } from 'redux-saga/effects';

import fetchTasksSaga from './fetch-tasks';
import createTaskSaga from './create-task';

function* rootSaga() {
  yield all([
    fetchTasksSaga(),
    createTaskSaga(),
  ]);
}

export default rootSaga;
