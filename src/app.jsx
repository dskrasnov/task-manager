import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Action, createBrowserHistory } from 'history';

import AppLoadingIndicator from './components/app-loading-indicator';
import Header from './components/header';
import AlertList from './components/alert-list';
import MainToolbar from './components/main-toolbar';
import TaskList from './components/task-list';
import TaskPagination from './components/task-pagination';
import Notification from './components/notification';
import TaskManageDialog from './components/task-manage-dialog';
import LoginDialog from './components/login-dialog';

import readAuthorizationData from './action-creators/read-authorization-data';
import readTaskListData from './action-creators/read-task-list-data';

const App = () => {
  const isInitialDataLoaded = useSelector(state => state.taskListState.isInitialDataLoaded);

  const dispatch = useDispatch();

  useEffect(
    () => {
      const history = createBrowserHistory();

      history.listen(({ action }) => {
        if (action === Action.Pop) dispatch(readTaskListData());
      });

      dispatch(readTaskListData());
      dispatch(readAuthorizationData());
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

            <Notification/>

            <TaskManageDialog/>

            <LoginDialog/>
          </>
        )
      }
    </>
  );
};

export default App;
