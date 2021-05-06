import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import CheckBox from '@material-ui/icons/CheckBox';

import setTaskManageDialogOpen from '../action-creators/set-task-manage-dialog-open';
import setTaskManageDialogFieldValue from '../action-creators/set-task-manage-dialog-field-value';

import { TASK_STATUS_MASK } from '../constants/commons';

const TaskCard = ({ id, username, email, text, status }) => {
  const binaryStatus = parseInt(status, 2);

  /* eslint-disable no-bitwise */

  const isEdited = !!(binaryStatus & TASK_STATUS_MASK.EDITED);
  const isDone = !!(binaryStatus & TASK_STATUS_MASK.DONE);

  /* eslint-enable no-bitwise */

  const isAuthorized = !!useSelector(state => state.authorizationState.token);

  const dispatch = useDispatch();

  const openEditTaskDialog = useCallback(
    () => {
      dispatch(setTaskManageDialogFieldValue({
        id,
        username,
        email,
        text,
        oldText: text,
        status,
        isAlreadyEdited: isEdited,
      }));

      dispatch(setTaskManageDialogOpen(true));
    },
    [dispatch, id, username, email, text, status, isEdited],
  );

  return (
    <Card style={{ position: 'relative' }}>
      {
        (isEdited || isDone) && (
          <Box style={{ position: 'absolute', top: 2, right: 2 }}>
            {
              isEdited && (
                <Tooltip title="Отредактирована">
                  <EditIcon fontSize="small"/>
                </Tooltip>
              )
            }

            {
              isDone && (
                <Tooltip title="Выполнена">
                  <CheckBox fontSize="small"/>
                </Tooltip>
              )
            }
          </Box>
        )
      }

      <CardContent>
        <Typography component="span">
          <b>Пользователь:</b>
        </Typography>
        <Typography paragraph noWrap>
          {username}
        </Typography>

        <Typography component="span">
          <b>Электронная почта:</b>
        </Typography>
        <Typography paragraph noWrap>
          {email}
        </Typography>

        <Typography component="span">
          <b>Текст задачи:</b>
        </Typography>
        <Typography paragraph>
          {text}
        </Typography>
      </CardContent>

      {
        isAuthorized && (
          <CardActions>
            <Button size="small" color="primary" onClick={openEditTaskDialog}>
              Редактировать
            </Button>
          </CardActions>
        )
      }
    </Card>
  );
};

TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};

export default TaskCard;
