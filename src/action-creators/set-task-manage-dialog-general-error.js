import { SET_TASK_MANAGE_DIALOG_GENERAL_ERROR } from '../constants/action-types';

const setTaskManageDialogGeneralError = generalError => ({
  type: SET_TASK_MANAGE_DIALOG_GENERAL_ERROR,
  payload: generalError,
});

export default setTaskManageDialogGeneralError;
