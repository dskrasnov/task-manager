import { SET_DIALOG_GENERAL_ERROR } from '../constants/action-types';

const setDialogGeneralError = (dialogName, generalError) => ({
  type: SET_DIALOG_GENERAL_ERROR,
  dialogName,
  payload: generalError,
});

export default setDialogGeneralError;
