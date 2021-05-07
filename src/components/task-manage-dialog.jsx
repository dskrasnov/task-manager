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

import BusiableButton from './busiable-button';

import setTaskManageDialogFieldValue from '../action-creators/set-task-manage-dialog-field-value';
import setTaskManageDialogFieldError from '../action-creators/set-task-manage-dialog-field-error';
import resetTaskManageDialogFieldError from '../action-creators/reset-task-manage-dialog-field-error';
import resetTaskManageDialogGeneralError from '../action-creators/reset-task-manage-dialog-general-error';
import resetTaskManageDialogState from '../action-creators/reset-task-manage-dialog-state';
import createTask from '../action-creators/async/create-task';
import editTask from '../action-creators/async/edit-task';

import { FIELD_EMPTY_ERROR, TASK_STATUS_MASK } from '../constants/commons';

const TaskManageDialog = () => {
  const taskId = useSelector(state => state.taskManageDialogState.fieldValue.id);

  const isTaskEditing = !!taskId;

  const dialogTitleText = isTaskEditing ? 'Редактирование задачи' : 'Создание задачи';
  const submitButtonLabel = isTaskEditing ? 'Сохранить' : 'Создать';

  const usernameFieldValue = useSelector(state => state.taskManageDialogState.fieldValue.username);
  const emailFieldValue = useSelector(state => state.taskManageDialogState.fieldValue.email);
  const textFieldValue = useSelector(state => state.taskManageDialogState.fieldValue.text);

  const oldTaskText = useSelector(state => state.taskManageDialogState.fieldValue.oldText);

  const taskStatus = useSelector(state => state.taskManageDialogState.fieldValue.status);
  const binaryTaskStatus = parseInt(taskStatus, 2);
  // eslint-disable-next-line no-bitwise
  const isTaskDone = !!(binaryTaskStatus & TASK_STATUS_MASK.DONE);

  const isAlreadyEdited = useSelector(state => state.taskManageDialogState.fieldValue.isAlreadyEdited);

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

  const isUneditableFieldDisabled = isDialogBusy || isTaskEditing;

  const dispatch = useDispatch();

  const closeDialog = useCallback(
    () => {
      if (isDialogBusy) return;

      dispatch(resetTaskManageDialogState());
    },
    [isDialogBusy, dispatch],
  );

  const changeFormField = useCallback(
    ({ target: { name, value } }) => {
      dispatch(resetTaskManageDialogGeneralError());

      dispatch(resetTaskManageDialogFieldError(name));
      dispatch(setTaskManageDialogFieldValue({ [name]: value }));

      if (!isTaskEditing) return;

      switch (name) {
        case 'status': {
          // eslint-disable-next-line no-bitwise
          const newBinaryTaskStatus = binaryTaskStatus ^ TASK_STATUS_MASK.DONE;
          const status = parseInt(newBinaryTaskStatus.toString(2), 10);

          dispatch(setTaskManageDialogFieldValue({ status }));

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

          dispatch(setTaskManageDialogFieldValue({ status }));

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
        ...(!isTaskEditing && { username: usernameFieldValue }),
        ...(!isTaskEditing && { email: emailFieldValue }),
        text: textFieldValue,
      });

      dispatch(setTaskManageDialogFieldError(fieldsError));

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
    <Dialog open={isDialogOpen} onClose={closeDialog}>
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
            disabled={isUneditableFieldDisabled}
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
            {submitButtonLabel}
          </BusiableButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskManageDialog;
