import { SET_DIALOG_BUSY } from '../constants/action-types';

const setDialogBusy = (dialogName, isBusy) => ({
  type: SET_DIALOG_BUSY,
  dialogName,
  payload: isBusy,
});

export default setDialogBusy;
