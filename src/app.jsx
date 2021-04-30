import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';

import AppLoadingIndicator from './components/app-loading-indicator';
import AlertList from './components/alert-list';
import MainToolbar from './components/main-toolbar';
import TaskList from './components/task-list';
import TaskPagination from './components/task-pagination';

import fetchTasks from './action-creators/fetch-tasks';
import TaskManageDialog from './components/task-manage-dialog';

const App = () => {
  const isInitialDataLoaded = useSelector(state => state.taskListState.isInitialDataLoaded);

  const dispatch = useDispatch();

  useEffect(
    () => dispatch(fetchTasks({ currentPage: 1 }, true)),
    [dispatch],
  );

  return (
    <>
      {
        !isInitialDataLoaded && (
          <AppLoadingIndicator/>
        )
      }

      {
        isInitialDataLoaded && (
          <>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">Задачи</Typography>
                <div style={{ flexGrow: 1 }}/>
                <Button color="inherit">Войти</Button>
              </Toolbar>
            </AppBar>

            <AlertList/>

            <MainToolbar/>

            <TaskList/>

            <TaskPagination/>

            <TaskManageDialog/>
          </>
        )
      }
    </>
  );
};

export default App;
