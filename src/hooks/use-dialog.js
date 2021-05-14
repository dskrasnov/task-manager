import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import resetDialogState from '../action-creators/reset-dialog-state';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import setDialogOpen from '../action-creators/set-dialog-open';
import resetDialogGeneralError from '../action-creators/reset-dialog-general-error';
import resetDialogFieldError from '../action-creators/reset-dialog-field-error';
import setDialogFieldValue from '../action-creators/set-dialog-field-value';

import { DIALOG_NAME } from '../constants/commons';

const useDialog = (dialogName, validate) => {
  const isOpen = useSelector(state => state.dialogState[dialogName].isOpen);
  const isBusy = useSelector(state => state.dialogState[dialogName].isBusy);

  const generalError = useSelector(state => state.dialogState[dialogName].generalError);

  const dispatch = useDispatch();

  const close = useCallback(
    () => {
      if (isBusy) return;

      dispatch(setDialogOpen(dialogName, false));
    },
    [isBusy, dispatch, dialogName],
  );

  const resetState = useCallback(
    () => dispatch(resetDialogState(dialogName)),
    [dispatch, dialogName],
  );

  const changeField = useCallback(
    ({ target: { name, value } }) => {
      dispatch(resetDialogGeneralError(DIALOG_NAME.TASK_MANAGE));
      dispatch(resetDialogFieldError(DIALOG_NAME.TASK_MANAGE, name));
      dispatch(setDialogFieldValue(DIALOG_NAME.TASK_MANAGE, { [name]: value }));
    },
    [dispatch],
  );

  const validateField = useCallback(
    event => {
      const fieldError = validate({ [event.target.name]: event.target.value });

      dispatch(setDialogFieldError(dialogName, fieldError));
    },
    [dialogName, dispatch, validate],
  );

  return {
    isOpen,
    isBusy,
    generalError,
    close,
    resetState,
    changeField,
    validateField,
  };
};

export default useDialog;
