import { RESET_TASK_MANAGE_DIALOG_FIELD_ERROR } from '../constants/action-types';

const resetTaskManageDialogFieldError = fieldName => ({
  type: RESET_TASK_MANAGE_DIALOG_FIELD_ERROR,
  payload: fieldName,
});

export default resetTaskManageDialogFieldError;
