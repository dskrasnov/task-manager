import axios from 'axios';

import { call, put, takeEvery, select } from 'redux-saga/effects';

import setDialogBusy from '../action-creators/set-dialog-busy';
import setDialogOpen from '../action-creators/set-dialog-open';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import setDialogGeneralError from '../action-creators/set-dialog-general-error';
import showNotification from '../action-creators/show-notification';
import setTasks from '../action-creators/set-tasks';

import adaptTask from '../utils/adapt-task';

import { CREATE_TASK } from '../constants/action-types';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
  NOTIFICATION_TYPE,
} from '../constants/commons';

function* createTask() {
  try {
    yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, true));

    const { dialogState: { [DIALOG_NAME.TASK_MANAGE]: { fieldValue: { username, email, text } } } } = yield select();

    const formData = new FormData();

    formData.append('username', username);
    formData.append('email', email);
    formData.append('text', text);

    const { data: { message, status } } = yield call(
      axios.post,
      `${BACKEND_URL}create?developer=${DEVELOPER_NAME}`,
      formData,
    );

    switch (status) {
      case BACKEND_STATUS.OK: {
        const { tasks } = yield select();

        yield put(setTasks([
          adaptTask(message),
          ...tasks.slice(0, -1),
        ]));

        yield put(setDialogOpen(DIALOG_NAME.TASK_MANAGE, false));
        yield put(showNotification(NOTIFICATION_TYPE.SUCCESS, 'Задача успешно создана!'));

        break;
      }

      case BACKEND_STATUS.ERROR: {
        yield put(setDialogFieldError(DIALOG_NAME.TASK_MANAGE, message));
        yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));

        break;
      }

      default:
        // no default
    }
  } catch (error) {
    yield put(setDialogGeneralError(DIALOG_NAME.TASK_MANAGE, 'При создании задачи что-то пошло не так.'));
    yield put(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));
  }
}

function* createTaskSaga() {
  yield takeEvery(CREATE_TASK, createTask);
}

export default createTaskSaga;
