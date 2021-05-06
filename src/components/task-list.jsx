import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';

import TaskCard from './task-card';

import useStyles from '../use-styles';

import { TASKS_PER_PAGE } from '../constants/commons';

const MD_GRID_SIZE = 12 / TASKS_PER_PAGE;

const TaskList = () => {
  const classes = useStyles();

  const tasks = useSelector(state => state.tasks);

  return (
    <div className={classes.gridWrapper}>
      <Grid container spacing={2} className={classes.grid}>
        {
          tasks.length
            ? tasks.map(task => (
              <Grid key={task.id} item xs={12} md={MD_GRID_SIZE}>
                <TaskCard
                  id={task.id}
                  username={task.username}
                  email={task.email}
                  text={task.text}
                  status={task.status}
                />
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

export default TaskList;
