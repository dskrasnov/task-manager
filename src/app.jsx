import React from 'react';

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

import Pagination from '@material-ui/lab/Pagination';

import TaskList from './components/task-list';

const TASKS = [
  {
    id: 1,
    username: 'Test User',
    email: 'test_user_1@example.com',
    text: 'Hello, world!',
    status: 10,
  },
  {
    id: 3,
    username: 'TestUser2TestUser2TestUser2TestUser2TestUser2TestUser2TestUser2TestUser2TestUser2TestUser2',
    email: 'test_user_2@example.com',
    text: 'Hello from user 2! Hello from user 2! Hello from user 2! Hello from user 2! Hello from user 2! ',
    status: 0,
  },
  {
    id: 4,
    username: 'Test User 3',
    email: 'test_user_3@example.com',
    text: 'Hello from user 3!',
    status: 0,
  },
];

const App = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Задачи</Typography>
        <div style={{ flexGrow: 1 }}/>
        <Button color="inherit">Войти</Button>
      </Toolbar>
    </AppBar>

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

    <TaskList tasks={TASKS}/>

    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ paddingBottom: 8 }}
    >
      <Grid item>
        <Pagination count={100} variant="outlined" shape="rounded"/>
      </Grid>
    </Grid>
  </>
);

export default App;
