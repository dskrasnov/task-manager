import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import TaskCard from './task-card';

import useStyles from '../styles';

const TaskList = ({ tasks }) => {
  const classes = useStyles();

  return (
    <div className={classes.gridWrapper}>
      <Grid container spacing={2} className={classes.grid}>
        {
          tasks.length
            ? tasks.map(task => (
              <Grid key={task.id} item xs={12} md={4}>
                <TaskCard text={task.text} email={task.email} username={task.username}/>
              </Grid>
            ))
            : (
              <Grid item xs={12}>
                <Typography align="center">Список задач пуст.</Typography>
              </Grid>
            )
        }
      </Grid>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TaskList;
