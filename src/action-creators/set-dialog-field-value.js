import { SET_DIALOG_FIELD_VALUE } from '../constants/action-types';

const setDialogFieldValue = (dialogName, fieldValue) => ({
  type: SET_DIALOG_FIELD_VALUE,
  dialogName,
  payload: fieldValue,
});

export default setDialogFieldValue;
