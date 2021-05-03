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

import setLoginDialogFieldValue from '../action-creators/set-login-dialog-field-value';
import setLoginDialogFieldError from '../action-creators/set-login-dialog-field-error';
import resetLoginDialogFieldError from '../action-creators/reset-login-dialog-field-error';
import resetLoginDialogGeneralError from '../action-creators/reset-login-dialog-general-error';
import resetLoginDialogState from '../action-creators/reset-login-dialog-state';
import login from '../action-creators/login';

import { FIELD_EMPTY_ERROR } from '../constants/commons';

const LoginDialog = () => {
  const usernameFieldValue = useSelector(state => state.loginDialogState.fieldValue.username);
  const passwordFieldValue = useSelector(state => state.loginDialogState.fieldValue.password);

  const usernameFieldError = useSelector(state => state.loginDialogState.fieldError.username);
  const passwordFieldError = useSelector(state => state.loginDialogState.fieldError.password);

  const generalError = useSelector(state => state.loginDialogState.generalError);

  const isUsernameFieldInvalid = !!usernameFieldError;
  const isPasswordFieldInvalid = !!passwordFieldError;

  const isFormInvalid = isUsernameFieldInvalid || isPasswordFieldInvalid;

  const isDialogOpen = useSelector(state => state.loginDialogState.isOpen);
  const isDialogBusy = useSelector(state => state.loginDialogState.isBusy);

  const dispatch = useDispatch();

  const closeDialog = useCallback(
    () => {
      if (isDialogBusy) return;

      dispatch(resetLoginDialogState());
    },
    [isDialogBusy, dispatch],
  );

  const changeFormField = useCallback(
    event => {
      dispatch(resetLoginDialogGeneralError());
      dispatch(resetLoginDialogFieldError(event.target.name));
      dispatch(setLoginDialogFieldValue({ [event.target.name]: event.target.value }));
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

      dispatch(setLoginDialogFieldError(fieldError));
    },
    [dispatch, validate],
  );

  const submitData = useCallback(
    event => {
      event.preventDefault();

      dispatch(resetLoginDialogGeneralError());

      const fieldsError = validate({
        username: usernameFieldValue,
        password: passwordFieldValue,
      });

      dispatch(setLoginDialogFieldError(fieldsError));

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
