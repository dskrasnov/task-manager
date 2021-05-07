import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { Alert, AlertTitle } from '@material-ui/lab';

import BusiableButton from './busiable-button';

import setDialogFieldValue from '../action-creators/set-dialog-field-value';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import resetDialogFieldError from '../action-creators/reset-dialog-field-error';
import resetDialogGeneralError from '../action-creators/reset-dialog-general-error';
import resetDialogState from '../action-creators/reset-dialog-state';
import login from '../action-creators/async/login';

import { DIALOG_NAME, FIELD_EMPTY_ERROR } from '../constants/commons';

const LoginDialog = () => {
  const usernameFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldValue.username);
  const passwordFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldValue.password);

  const usernameFieldError = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldError.username);
  const passwordFieldError = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldError.password);

  const generalError = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].generalError);

  const isUsernameFieldInvalid = !!usernameFieldError;
  const isPasswordFieldInvalid = !!passwordFieldError;

  const isFormInvalid = isUsernameFieldInvalid || isPasswordFieldInvalid;

  const isDialogOpen = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].isOpen);
  const isDialogBusy = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].isBusy);

  const dispatch = useDispatch();

  const closeDialog = useCallback(
    () => {
      if (isDialogBusy) return;

      dispatch(resetDialogState(DIALOG_NAME.LOGIN));
    },
    [isDialogBusy, dispatch],
  );

  const changeFormField = useCallback(
    event => {
      dispatch(resetDialogGeneralError(DIALOG_NAME.LOGIN));
      dispatch(resetDialogFieldError(DIALOG_NAME.LOGIN, event.target.name));
      dispatch(setDialogFieldValue(DIALOG_NAME.LOGIN, { [event.target.name]: event.target.value }));
    },
    [dispatch],
  );

  const validate = useCallback(
    fieldValue => ({
      ...(fieldValue.username !== undefined
        && fieldValue.username.length === 0
        && { username: FIELD_EMPTY_ERROR }),

      ...(fieldValue.password !== undefined
        && fieldValue.password.length === 0
        && { password: FIELD_EMPTY_ERROR }),
    }),
    [],
  );

  const validateFieldValue = useCallback(
    event => {
      const fieldError = validate({ [event.target.name]: event.target.value });

      dispatch(setDialogFieldError(DIALOG_NAME.LOGIN, fieldError));
    },
    [dispatch, validate],
  );

  const submitData = useCallback(
    event => {
      event.preventDefault();

      dispatch(resetDialogGeneralError(DIALOG_NAME.LOGIN));

      const fieldsError = validate({
        username: usernameFieldValue,
        password: passwordFieldValue,
      });

      dispatch(setDialogFieldError(DIALOG_NAME.LOGIN, fieldsError));

      if (fieldsError.username || fieldsError.password) return;

      dispatch(login());
    },
    [
      validate,
      usernameFieldValue,
      passwordFieldValue,
      dispatch,
    ],
  );

  return (
    <Dialog open={isDialogOpen} onClose={closeDialog}>
      <DialogTitle>Вход</DialogTitle>

      <form noValidate onSubmit={submitData}>
        <DialogContent>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Пользователь"
            name="username"
            value={usernameFieldValue}
            error={isUsernameFieldInvalid}
            helperText={usernameFieldError}
            disabled={isDialogBusy}
            onChange={changeFormField}
            onBlur={validateFieldValue}
          />

          <TextField
            required
            fullWidth
            margin="normal"
            type="password"
            label="Пароль"
            name="password"
            value={passwordFieldValue}
            error={isPasswordFieldInvalid}
            helperText={passwordFieldError}
            disabled={isDialogBusy}
            onChange={changeFormField}
            onBlur={validateFieldValue}
          />

          {
            generalError && (
              <Alert
                severity="error"
                variant="filled"
              >
                <AlertTitle>Ошибка</AlertTitle>
                {generalError}
              </Alert>
            )
          }
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            disabled={isDialogBusy}
            onClick={closeDialog}
          >
            Отменить
          </Button>

          <BusiableButton
            color="primary"
            disabled={isFormInvalid}
            type="submit"
            busy={isDialogBusy}
          >
            Войти
          </BusiableButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginDialog;
