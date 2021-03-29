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

const TaskCard = ({ username, email, text }) => (
  <Card style={{ position: 'relative' }}>
    <Box style={{ position: 'absolute', top: 2, right: 2 }}>
      <Tooltip title="Отредактирована">
        <EditIcon fontSize="small"/>
      </Tooltip>
      <Tooltip title="Выполнена">
        <DoneIcon fontSize="small"/>
      </Tooltip>
    </Box>

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

TaskCard.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskCard;
