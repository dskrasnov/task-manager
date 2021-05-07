import { RESET_DIALOG_GENERAL_ERROR } from '../constants/action-types';

const resetDialogGeneralError = dialogName => ({
  type: RESET_DIALOG_GENERAL_ERROR,
  dialogName,
});

export default resetDialogGeneralError;
