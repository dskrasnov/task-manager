import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLoadingIndicator from './components/app-loading-indicator';
import Header from './components/header';
import AlertList from './components/alert-list';
import MainToolbar from './components/main-toolbar';
import TaskList from './components/task-list';
import TaskPagination from './components/task-pagination';
import TaskManageDialog from './components/task-manage-dialog';
import LoginDialog from './components/login-dialog';

import readAuthorizationData from './action-creators/async/read-authorization-data';
import fetchTasks from './action-creators/async/fetch-tasks';

const App = () => {
  const isInitialDataLoaded = useSelector(state => state.taskListState.isInitialDataLoaded);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(readAuthorizationData());
      dispatch(fetchTasks({ currentPage: 1 }, true));
    },
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
            <Header/>

            <AlertList/>

            <MainToolbar/>

            <TaskList/>

            <TaskPagination/>

            <TaskManageDialog/>

            <LoginDialog/>
          </>
        )
      }
    </>
  );
};

export default App;
