import { SET_LOGIN_DIALOG_BUSY } from '../constants/action-types';

const setLoginDialogBusy = isBusy => ({
  type: SET_LOGIN_DIALOG_BUSY,
  payload: isBusy,
});

export default setLoginDialogBusy;
