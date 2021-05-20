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

import useDialog from '../hooks/use-dialog';

import BusiableButton from './busiable-button';

import setDialogFieldError from '../action-creators/set-dialog-field-error';
import resetDialogGeneralError from '../action-creators/reset-dialog-general-error';
import login from '../action-creators/login';

import { DIALOG_NAME, FIELD_EMPTY_ERROR } from '../constants/commons';

const LoginDialog = () => {
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

  const {
    isOpen,
    isBusy,
    generalError,
    close,
    resetState,
    changeField,
    validateField,
  } = useDialog(DIALOG_NAME.LOGIN, validate);

  const usernameFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldValue.username);
  const passwordFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldValue.password);

  const usernameFieldError = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldError.username);
  const passwordFieldError = useSelector(state => state.dialogState[DIALOG_NAME.LOGIN].fieldError.password);

  const isUsernameFieldInvalid = !!usernameFieldError;
  const isPasswordFieldInvalid = !!passwordFieldError;

  const isFormInvalid = isUsernameFieldInvalid || isPasswordFieldInvalid;

  const dispatch = useDispatch();

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
    <Dialog
      open={isOpen}
      onClose={close}
      onExited={resetState}
    >
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
            disabled={isBusy}
            onChange={changeField}
            onBlur={validateField}
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
            disabled={isBusy}
            onChange={changeField}
            onBlur={validateField}
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
            disabled={isBusy}
            onClick={close}
          >
            Отменить
          </Button>

          <BusiableButton
            color="primary"
            disabled={isFormInvalid}
            type="submit"
            busy={isBusy}
          >
            Войти
          </BusiableButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginDialog;
