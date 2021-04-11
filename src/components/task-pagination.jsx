import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import fetchTasks from '../action-creators/fetch-tasks';
import useStyles from '../use-styles';

const TaskPagination = () => {
  const classes = useStyles();

  const pagesTotal = useSelector(state => state.taskListState.pagesTotal);
  const currentPage = useSelector(state => state.taskListState.currentPage);

  const dispatch = useDispatch();

  if (pagesTotal < 2) return null;

  const changePage = (event, value) => {
    dispatch(fetchTasks({ currentPage: value }));
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.taskPagination}
    >
      <Grid item>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={pagesTotal}
          page={currentPage}
          /* eslint-disable-next-line react/jsx-no-bind */
          onChange={changePage}
        />
      </Grid>
    </Grid>
  );
};

export default TaskPagination;
