import axios from 'axios';

import fetchTasks from './fetch-tasks';
import resetTaskManageDialogState from './reset-task-manage-dialog-state';
import setTaskManageDialogFieldError from './set-task-manage-dialog-field-error';
import setTaskManageDialogBusy from './set-task-manage-dialog-busy';
import setTaskManageDialogGeneralError from './set-task-manage-dialog-general-error';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
} from '../constants/commons';

const createTask = () => (dispatch, getState) => {
  const { taskManageDialogState: { fieldValue: { username, email, text } } } = getState();

  const formData = new FormData();

  formData.append('username', username);
  formData.append('email', email);
  formData.append('text', text);

  dispatch(setTaskManageDialogBusy(true));

  return axios
    .post(`${BACKEND_URL}create?developer=${DEVELOPER_NAME}`, formData)
    .then(({ data: { message, status } }) => {
      if (status === BACKEND_STATUS.OK) {
        dispatch(fetchTasks());
        dispatch(resetTaskManageDialogState());
      }

      if (status === BACKEND_STATUS.ERROR) {
        dispatch(setTaskManageDialogFieldError(message));
        dispatch(setTaskManageDialogBusy(false));
      }
    })
    .catch(() => {
      dispatch(setTaskManageDialogGeneralError('При создании задачи что-то пошло не так.'));
      dispatch(setTaskManageDialogBusy(false));
    });
};

export default createTask;
