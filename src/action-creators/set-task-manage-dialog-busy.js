import { SET_TASK_MANAGE_DIALOG_BUSY } from '../constants/action-types';

const setTaskManageDialogBusy = isBusy => ({
  type: SET_TASK_MANAGE_DIALOG_BUSY,
  payload: isBusy,
});

export default setTaskManageDialogBusy;
