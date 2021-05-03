import { SET_LOGIN_DIALOG_FIELD_ERROR } from '../constants/action-types';

const setLoginDialogFieldError = fieldName => ({
  type: SET_LOGIN_DIALOG_FIELD_ERROR,
  payload: fieldName,
});

export default setLoginDialogFieldError;
