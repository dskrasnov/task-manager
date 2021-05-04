import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

const EDITED = 0b01;
const DONE = 0b10;

const TaskCard = ({ username, email, text, status }) => {
  const binaryStatus = parseInt(status, 2);

  /* eslint-disable no-bitwise */

  const isEdited = !!(binaryStatus & EDITED);
  const isDone = !!(binaryStatus & DONE);

  /* eslint-enable no-bitwise */

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
                  <DoneIcon fontSize="small"/>
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

      <CardActions>
        <Tooltip title="Редактировать">
          <IconButton>
            <EditIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Отметить выполненной">
          <IconButton>
            <DoneIcon/>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

TaskCard.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};

export default TaskCard;
