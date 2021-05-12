import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
} from '@material-ui/core';

import { Alert, AlertTitle } from '@material-ui/lab';

import useDialog from '../hooks/use-dialog';

import BusiableButton from './busiable-button';

import setDialogFieldValue from '../action-creators/set-dialog-field-value';
import setDialogFieldError from '../action-creators/set-dialog-field-error';
import resetDialogFieldError from '../action-creators/reset-dialog-field-error';
import resetDialogGeneralError from '../action-creators/reset-dialog-general-error';
import createTask from '../action-creators/async/create-task';
import editTask from '../action-creators/async/edit-task';

import {
  DIALOG_NAME,
  FIELD_EMPTY_ERROR,
  TASK_STATUS_MASK,
} from '../constants/commons';

const TaskManageDialog = () => {
  const validate = useCallback(
    fieldValue => {
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

  const {
    isOpen,
    isBusy,
    generalError,
    close,
    validateField,
  } = useDialog(DIALOG_NAME.TASK_MANAGE, validate);

  const taskId = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.id);

  const isTaskEditing = !!taskId;

  const dialogTitleText = isTaskEditing ? 'Редактирование задачи' : 'Создание задачи';
  const submitButtonLabel = isTaskEditing ? 'Сохранить' : 'Создать';

  const usernameFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.username);
  const emailFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.email);
  const textFieldValue = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.text);

  const oldTaskText = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.oldText);

  const taskStatus = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.status);
  const binaryTaskStatus = parseInt(taskStatus, 2);
  // eslint-disable-next-line no-bitwise
  const isTaskDone = !!(binaryTaskStatus & TASK_STATUS_MASK.DONE);

  const isAlreadyEdited = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldValue.isAlreadyEdited);

  const usernameFieldError = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldError.username);
  const emailFieldError = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldError.email);
  const textFieldError = useSelector(state => state.dialogState[DIALOG_NAME.TASK_MANAGE].fieldError.text);

  const isUsernameFieldInvalid = !!usernameFieldError;
  const isEmailFieldInvalid = !!emailFieldError;
  const isTextFieldInvalid = !!textFieldError;

  const isFormInvalid = isUsernameFieldInvalid || isEmailFieldInvalid || isTextFieldInvalid;

  const isUneditableFieldDisabled = isBusy || isTaskEditing;

  const dispatch = useDispatch();

  const changeFormField = useCallback(
    ({ target: { name, value } }) => {
      dispatch(resetDialogGeneralError(DIALOG_NAME.TASK_MANAGE));

      dispatch(resetDialogFieldError(DIALOG_NAME.TASK_MANAGE, name));
      dispatch(setDialogFieldValue(DIALOG_NAME.TASK_MANAGE, { [name]: value }));

      if (!isTaskEditing) return;

      switch (name) {
        case 'status': {
          // eslint-disable-next-line no-bitwise
          const newBinaryTaskStatus = binaryTaskStatus ^ TASK_STATUS_MASK.DONE;
          const status = parseInt(newBinaryTaskStatus.toString(2), 10);

          dispatch(setDialogFieldValue(DIALOG_NAME.TASK_MANAGE, { status }));

          break;
        }

        case 'text': {
          if (isAlreadyEdited) break;

          /* eslint-disable no-bitwise */

          const newBinaryTaskStatus = value !== oldTaskText
            ? binaryTaskStatus | TASK_STATUS_MASK.EDITED
            : binaryTaskStatus & ~TASK_STATUS_MASK.EDITED;

          /* eslint-enable no-bitwise */

          const status = parseInt(newBinaryTaskStatus.toString(2), 10);

          dispatch(setDialogFieldValue(DIALOG_NAME.TASK_MANAGE, { status }));

          break;
        }

        default:
          // no default case
      }
    },
    [
      dispatch,
      isTaskEditing,
      binaryTaskStatus,
      isAlreadyEdited,
      oldTaskText,
    ],
  );

  const submitData = useCallback(
    event => {
      event.preventDefault();

      dispatch(resetDialogGeneralError(DIALOG_NAME.TASK_MANAGE));

      const fieldsError = validate({
        ...(!isTaskEditing && { username: usernameFieldValue }),
        ...(!isTaskEditing && { email: emailFieldValue }),
        text: textFieldValue,
      });

      dispatch(setDialogFieldError(DIALOG_NAME.TASK_MANAGE, fieldsError));

      if (fieldsError.username || fieldsError.email || fieldsError.text) return;

      const action = isTaskEditing ? editTask : createTask;

      dispatch(action());
    },
    [
      dispatch,
      validate,
      isTaskEditing,
      usernameFieldValue,
      emailFieldValue,
      textFieldValue,
    ],
  );

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>{dialogTitleText}</DialogTitle>

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
            disabled={isUneditableFieldDisabled}
            onChange={changeFormField}
            onBlur={validateField}
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
            disabled={isUneditableFieldDisabled}
            onChange={changeFormField}
            onBlur={validateField}
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
            disabled={isBusy}
            onChange={changeFormField}
            onBlur={validateField}
          />

          {
            isTaskEditing && (
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    name="status"
                    checked={isTaskDone}
                    onChange={changeFormField}
                  />
                )}
                label="Задача выполнена"
              />
            )
          }

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
            {submitButtonLabel}
          </BusiableButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskManageDialog;
