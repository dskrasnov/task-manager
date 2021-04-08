import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Button,
  Grid,
  IconButton,
  NativeSelect,
  Toolbar,
  Typography,
} from '@material-ui/core';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import AppLoadingIndicator from './components/app-loading-indicator';
import AlertList from './components/alert-list';
import TaskList from './components/task-list';
import TaskPagination from './components/task-pagination';

import fetchTasks from './action-creators/fetch-tasks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTasks(1, true)), []);

  const isInitialDataLoaded = useSelector(state => state.taskListState.isInitialDataLoaded);

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

            <Toolbar>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Button variant="contained" color="secondary">Создать</Button>
                </Grid>
                <Grid item>
                  <NativeSelect value="">
                    <option value="">Без сортировки</option>
                    <option value="username">Пользователь</option>
                    <option value="email">Электронная почта</option>
                    <option value="status">Статус</option>
                  </NativeSelect>
                  <IconButton aria-label="По возрастанию">
                    <ArrowDownwardIcon/>
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>

            <TaskList/>

            <TaskPagination/>
          </>
        )
      }
    </>
  );
};

export default App;
