import { RESET_DIALOG_STATE } from '../constants/action-types';

const resetDialogState = dialogName => ({
  type: RESET_DIALOG_STATE,
  dialogName,
});

export default resetDialogState;
