import { SET_TASK_MANAGE_DIALOG_FIELD_VALUE } from '../constants/action-types';

const setTaskManageDialogFieldValue = fieldName => ({
  type: SET_TASK_MANAGE_DIALOG_FIELD_VALUE,
  payload: fieldName,
});

export default setTaskManageDialogFieldValue;
