import axios from 'axios';

import fetchTasks from './fetch-tasks';
import resetDialogState from '../reset-dialog-state';
import setDialogFieldError from '../set-dialog-field-error';
import setDialogBusy from '../set-dialog-busy';
import setDialogGeneralError from '../set-dialog-general-error';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
} from '../../constants/commons';

const editTask = () => (dispatch, getState) => {
  const { dialogState: { [DIALOG_NAME.TASK_MANAGE]: { fieldValue: { id, text, status } } } } = getState();
  const { authorizationState: { token } } = getState();

  const formData = new FormData();

  formData.append('text', text);
  formData.append('status', status);
  formData.append('token', token);

  dispatch(setDialogBusy(DIALOG_NAME.TASK_MANAGE, true));

  return axios
    .post(`${BACKEND_URL}edit/${id}?developer=${DEVELOPER_NAME}`, formData)
    .then(({ data: { message, status: responseStatus } }) => {
      if (responseStatus === BACKEND_STATUS.OK) {
        dispatch(fetchTasks());
        dispatch(resetDialogState(DIALOG_NAME.TASK_MANAGE));
      }

      if (responseStatus === BACKEND_STATUS.ERROR) {
        const { token: tokenError, ...rest } = message;

        if (tokenError) dispatch(setDialogGeneralError(DIALOG_NAME.TASK_MANAGE, tokenError));

        dispatch(setDialogFieldError(DIALOG_NAME.TASK_MANAGE, rest));
        dispatch(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));
      }
    })
    .catch(() => {
      dispatch(setDialogGeneralError(DIALOG_NAME.TASK_MANAGE, 'При сохранении задачи что-то пошло не так.'));
      dispatch(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));
    });
};

export default editTask;
