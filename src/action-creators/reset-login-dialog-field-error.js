import { RESET_LOGIN_DIALOG_FIELD_ERROR } from '../constants/action-types';

const resetLoginDialogFieldError = fieldName => ({
  type: RESET_LOGIN_DIALOG_FIELD_ERROR,
  payload: fieldName,
});

export default resetLoginDialogFieldError;
