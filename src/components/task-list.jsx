import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';

import TaskCard from './task-card';

import useStyles from '../styles';

const TaskList = () => {
  const classes = useStyles();

  const tasks = useSelector(state => state.tasks);

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

export default TaskList;
