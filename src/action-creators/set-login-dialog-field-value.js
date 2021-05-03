import { SET_LOGIN_DIALOG_FIELD_VALUE } from '../constants/action-types';

const setLoginDialogFieldValue = fieldName => ({
  type: SET_LOGIN_DIALOG_FIELD_VALUE,
  payload: fieldName,
});

export default setLoginDialogFieldValue;
