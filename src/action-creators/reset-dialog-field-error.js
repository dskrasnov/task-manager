import { RESET_DIALOG_FIELD_ERROR } from '../constants/action-types';

const resetDialogFieldError = (dialogName, fieldName) => ({
  type: RESET_DIALOG_FIELD_ERROR,
  dialogName,
  payload: fieldName,
});

export default resetDialogFieldError;
