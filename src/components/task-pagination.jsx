import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import fetchTasks from '../action-creators/fetch-tasks';

const TaskPagination = () => {
  const pagesTotal = useSelector(state => state.taskListState.pagesTotal);
  const currentPage = useSelector(state => state.taskListState.currentPage);

  const dispatch = useDispatch();

  if (pagesTotal < 2) return null;

  const changeHandler = (event, value) => {
    dispatch(fetchTasks(value));
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ paddingBottom: 8 }}
    >
      <Grid item>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={pagesTotal}
          page={currentPage}
          /* eslint-disable-next-line react/jsx-no-bind */
          onChange={changeHandler}
        />
      </Grid>
    </Grid>
  );
};

export default TaskPagination;
