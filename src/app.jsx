import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  NativeSelect,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

import Pagination from '@material-ui/lab/Pagination';

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

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
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

      <div style={{ padding: 8 }}>
        <Grid container spacing={2} className={classes.grid}>
          {
            TASKS.map(task => (
              <Grid key={task.id} item xs={12} md={4}>
                <Card style={{ position: 'relative' }}>
                  <Box style={{ position: 'absolute', top: 2, right: 2 }}>
                    <Tooltip title="Отредактирована">
                      <EditIcon fontSize="small"/>
                    </Tooltip>
                    <Tooltip title="Выполнена">
                      <DoneIcon fontSize="small"/>
                    </Tooltip>
                  </Box>

                  <CardContent>
                    <Typography component="span">
                      <b>Пользователь:</b>
                    </Typography>
                    <Typography paragraph noWrap>
                      {task.username}
                    </Typography>

                    <Typography component="span">
                      <b>Электронная почта:</b>
                    </Typography>
                    <Typography paragraph noWrap>
                      {task.email}
                    </Typography>

                    <Typography component="span">
                      <b>Текст задачи:</b>
                    </Typography>
                    <Typography paragraph>
                      {task.text}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Tooltip title="Редактировать">
                      <IconButton>
                        <EditIcon/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Отметить выполненной">
                      <IconButton>
                        <DoneIcon/>
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>

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
}

export default App;
