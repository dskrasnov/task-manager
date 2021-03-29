import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import TaskCard from '../task-card';

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const TaskList = ({ tasks }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 8 }}>
      <Grid container spacing={2} className={classes.grid}>
        {
          tasks.map(task => (
            <Grid key={task.id} item xs={12} md={4}>
              <TaskCard text={task.text} email={task.email} username={task.username}/>
            </Grid>
          ))
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
