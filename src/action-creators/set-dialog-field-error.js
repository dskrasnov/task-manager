import { SET_DIALOG_FIELD_ERROR } from '../constants/action-types';

const setDialogFieldError = (dialogName, fieldError) => ({
  type: SET_DIALOG_FIELD_ERROR,
  dialogName,
  payload: fieldError,
});

export default setDialogFieldError;
