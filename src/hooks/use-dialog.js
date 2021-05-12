import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import resetDialogState from '../action-creators/reset-dialog-state';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import setDialogOpen from '../action-creators/set-dialog-open';

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
    validateField,
  };
};

export default useDialog;
