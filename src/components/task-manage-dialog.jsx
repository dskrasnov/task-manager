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

import setTaskManageDialogFieldValue from '../action-creators/set-task-manage-dialog-field-value';
import setTaskManageDialogFieldError from '../action-creators/set-task-manage-dialog-field-error';
import resetTaskManageDialogFieldError from '../action-creators/reset-task-manage-dialog-field-error';
import resetTaskManageDialogGeneralError from '../action-creators/reset-task-manage-dialog-general-error';
import resetTaskManageDialogState from '../action-creators/reset-task-manage-dialog-state';
import createTask from '../action-creators/create-task';

const TaskManageDialog = () => {
  const usernameFieldValue = useSelector(state => state.taskManageDialogState.fieldValue.username);
  const emailFieldValue = useSelector(state => state.taskManageDialogState.fieldValue.email);
  const textFieldValue = useSelector(state => state.taskManageDialogState.fieldValue.text);

  const usernameFieldError = useSelector(state => state.taskManageDialogState.fieldError.username);
  const emailFieldError = useSelector(state => state.taskManageDialogState.fieldError.email);
  const textFieldError = useSelector(state => state.taskManageDialogState.fieldError.text);

  const generalError = useSelector(state => state.taskManageDialogState.generalError);

  const isUsernameFieldInvalid = !!usernameFieldError;
  const isEmailFieldInvalid = !!emailFieldError;
  const isTextFieldInvalid = !!textFieldError;

  const isFormInvalid = isUsernameFieldInvalid || isEmailFieldInvalid || isTextFieldInvalid;

  const isDialogOpen = useSelector(state => state.taskManageDialogState.isOpen);
  const isDialogBusy = useSelector(state => state.taskManageDialogState.isBusy);

  const dispatch = useDispatch();

  const closeDialog = useCallback(
    () => {
      if (isDialogBusy) return;

      dispatch(resetTaskManageDialogState());
    },
    [isDialogBusy, dispatch],
  );

  const changeFormField = useCallback(
    event => {
      dispatch(resetTaskManageDialogGeneralError());
      dispatch(resetTaskManageDialogFieldError(event.target.name));
      dispatch(setTaskManageDialogFieldValue({ [event.target.name]: event.target.value }));
    },
    [dispatch],
  );

  const validate = useCallback(
    fieldValue => {
      const FIELD_EMPTY_ERROR = 'Поле не может быть пустым';
      const EMAIL_REGEXP = /.+@.+\..+/;

      return ({
        ...(fieldValue.username !== undefined
          && fieldValue.username.length === 0
          && { username: FIELD_EMPTY_ERROR }),
        ...(fieldValue.text !== undefined
          && fieldValue.text.length === 0
          && { text: FIELD_EMPTY_ERROR }),

        ...(fieldValue.email !== undefined
          && !EMAIL_REGEXP.test(fieldValue.email)
          && { email: 'Некорректный формат адреса' }),
        ...(fieldValue.email !== undefined
          && fieldValue.email.length === 0
          && { email: FIELD_EMPTY_ERROR }),
      });
    },
    [],
  );

  const validateFieldValue = useCallback(
    event => {
      const fieldError = validate({ [event.target.name]: event.target.value });

      dispatch(setTaskManageDialogFieldError(fieldError));
    },
    [dispatch, validate],
  );

  const submitData = useCallback(
    event => {
      event.preventDefault();

      dispatch(resetTaskManageDialogGeneralError());

      const fieldsError = validate({
        username: usernameFieldValue,
        email: emailFieldValue,
        text: textFieldValue,
      });

      dispatch(setTaskManageDialogFieldError(fieldsError));

      if (fieldsError.username || fieldsError.email || fieldsError.text) return;

      dispatch(createTask());
    },
    [
      validate,
      usernameFieldValue,
      emailFieldValue,
      textFieldValue,
      dispatch,
    ],
  );

  return (
    <Dialog open={isDialogOpen} onClose={closeDialog}>
      <DialogTitle>Создание задачи</DialogTitle>

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
            label="Электронная почта"
            name="email"
            value={emailFieldValue}
            error={isEmailFieldInvalid}
            helperText={emailFieldError}
            disabled={isDialogBusy}
            onChange={changeFormField}
            onBlur={validateFieldValue}
          />

          <TextField
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
            label="Текст задачи"
            name="text"
            value={textFieldValue}
            error={isTextFieldInvalid}
            helperText={textFieldError}
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
            Создать
          </BusiableButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskManageDialog;
