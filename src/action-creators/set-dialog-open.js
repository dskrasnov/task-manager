import { SET_DIALOG_OPEN } from '../constants/action-types';

const setDialogOpen = (dialogName, isOpen) => ({
  type: SET_DIALOG_OPEN,
  dialogName,
  payload: isOpen,
});

export default setDialogOpen;
