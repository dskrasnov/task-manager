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

const editTask = () => (dispatch, getState) => {
  const { taskManageDialogState: { fieldValue: { id, text, status } } } = getState();
  const { authorizationState: { token } } = getState();

  const formData = new FormData();

  formData.append('text', text);
  formData.append('status', status);
  formData.append('token', token);

  dispatch(setTaskManageDialogBusy(true));

  return axios
    .post(`${BACKEND_URL}edit/${id}?developer=${DEVELOPER_NAME}`, formData)
    .then(({ data: { message, status: responseStatus } }) => {
      if (responseStatus === BACKEND_STATUS.OK) {
        dispatch(fetchTasks());
        dispatch(resetTaskManageDialogState());
      }

      if (responseStatus === BACKEND_STATUS.ERROR) {
        const { token: tokenError, ...rest } = message;

        if (tokenError) dispatch(setTaskManageDialogGeneralError(tokenError));

        dispatch(setTaskManageDialogFieldError(rest));
        dispatch(setTaskManageDialogBusy(false));
      }
    })
    .catch(() => {
      dispatch(setTaskManageDialogGeneralError('При сохранении задачи что-то пошло не так.'));
      dispatch(setTaskManageDialogBusy(false));
    });
};

export default editTask;
