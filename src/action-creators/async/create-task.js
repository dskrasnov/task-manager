import axios from 'axios';

import fetchTasks from '../fetch-tasks';
import setDialogOpen from '../set-dialog-open';
import setDialogFieldError from '../set-dialog-field-error';
import setDialogBusy from '../set-dialog-busy';
import setDialogGeneralError from '../set-dialog-general-error';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
} from '../../constants/commons';

const createTask = () => (dispatch, getState) => {
  const { dialogState: { [DIALOG_NAME.TASK_MANAGE]: { fieldValue: { username, email, text } } } } = getState();

  const formData = new FormData();

  formData.append('username', username);
  formData.append('email', email);
  formData.append('text', text);

  dispatch(setDialogBusy(DIALOG_NAME.TASK_MANAGE, true));

  return axios
    .post(`${BACKEND_URL}create?developer=${DEVELOPER_NAME}`, formData)
    .then(({ data: { message, status } }) => {
      if (status === BACKEND_STATUS.OK) {
        dispatch(fetchTasks());
        dispatch(setDialogOpen(DIALOG_NAME.TASK_MANAGE, false));
      }

      if (status === BACKEND_STATUS.ERROR) {
        dispatch(setDialogFieldError(DIALOG_NAME.TASK_MANAGE, message));
        dispatch(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));
      }
    })
    .catch(() => {
      dispatch(setDialogGeneralError(DIALOG_NAME.TASK_MANAGE, 'При создании задачи что-то пошло не так.'));
      dispatch(setDialogBusy(DIALOG_NAME.TASK_MANAGE, false));
    });
};

export default createTask;
