import { SET_LOGIN_DIALOG_OPEN } from '../constants/action-types';

const setLoginDialogOpen = isOpen => ({
  type: SET_LOGIN_DIALOG_OPEN,
  payload: isOpen,
});

export default setLoginDialogOpen;
