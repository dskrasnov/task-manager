import { SET_TASK_MANAGE_DIALOG_FIELD_ERROR } from '../constants/action-types';

const setTaskManageDialogFieldError = fieldName => ({
  type: SET_TASK_MANAGE_DIALOG_FIELD_ERROR,
  payload: fieldName,
});

export default setTaskManageDialogFieldError;
