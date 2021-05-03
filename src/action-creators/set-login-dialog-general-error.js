import { SET_LOGIN_DIALOG_GENERAL_ERROR } from '../constants/action-types';

const setLoginDialogGeneralError = generalError => ({
  type: SET_LOGIN_DIALOG_GENERAL_ERROR,
  payload: generalError,
});

export default setLoginDialogGeneralError;
