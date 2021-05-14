import axios from 'axios';

import fetchTasks from './fetch-tasks';
import setDialogOpen from '../set-dialog-open';
import setDialogFieldError from '../set-dialog-field-error';
import setDialogBusy from '../set-dialog-busy';
import setDialogGeneralError from '../set-dialog-general-error';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
  TASK_STATUS_MASK,
} from '../../constants/commons';

const editTask = () => (dispatch, getState) => {
  const {
    dialogState: {
      [DIALOG_NAME.TASK_MANAGE]: {
        fieldValue: { id, text, oldText, isEdited, isDone },
      },
    },
  } = getState();

  // eslint-disable-next-line no-bitwise
  const binaryTaskStatus = (isDone && TASK_STATUS_MASK.DONE)
    ^ ((isEdited || text !== oldText) && TASK_STATUS_MASK.EDITED);

  const status = parseInt(binaryTaskStatus.toString(2), 10);

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
        dispatch(setDialogOpen(DIALOG_NAME.TASK_MANAGE, false));
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
