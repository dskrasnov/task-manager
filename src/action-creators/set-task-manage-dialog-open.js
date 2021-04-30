import { SET_TASK_MANAGE_DIALOG_OPEN } from '../constants/action-types';

const setTaskManageDialogOpen = isOpen => ({
  type: SET_TASK_MANAGE_DIALOG_OPEN,
  payload: isOpen,
});

export default setTaskManageDialogOpen;
