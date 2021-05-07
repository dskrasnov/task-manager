import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Grid, IconButton, MenuItem, Select, Toolbar, Tooltip } from '@material-ui/core';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import fetchTasks from '../action-creators/async/fetch-tasks';
import setTaskManageDialogOpen from '../action-creators/set-task-manage-dialog-open';

import { TASK_SORTING_DIRECTION, TASK_SORTING_FIELD } from '../constants/commons';

const TASK_SORTING_MODES = [
  { field: TASK_SORTING_FIELD.NO_SORTING, label: 'Без сортировки' },
  { field: TASK_SORTING_FIELD.ID, label: 'По идентификатору' },
  { field: TASK_SORTING_FIELD.USERNAME, label: 'По имени пользователя' },
  { field: TASK_SORTING_FIELD.EMAIL, label: 'По адресу электронной почты' },
  { field: TASK_SORTING_FIELD.STATUS, label: 'По статусу' },
];

const MainToolbar = () => {
  const sortingField = useSelector(state => state.taskListState.sortingField);
  const sortingDirection = useSelector(state => state.taskListState.sortingDirection);

  const isSortingDirectionButtonShown = sortingField !== TASK_SORTING_FIELD.NO_SORTING;
  const isSortingDirectionAsc = sortingDirection === TASK_SORTING_DIRECTION.ASC;

  const sortingDirectionLabel = isSortingDirectionAsc ? 'По убыванию' : 'По возрастанию';

  const dispatch = useDispatch();

  const openCreateTaskDialog = useCallback(
    () => dispatch(setTaskManageDialogOpen(true)),
    [dispatch],
  );

  const changeSortingField = useCallback(
    ({ target: { value } }) => dispatch(fetchTasks(
      { sortingField: value },
    )),
    [dispatch],
  );

  const toggleSortingDirection = useCallback(
    () => dispatch(fetchTasks({
      sortingDirection: isSortingDirectionAsc
        ? TASK_SORTING_DIRECTION.DESC
        : TASK_SORTING_DIRECTION.ASC,
    })),
    [dispatch, isSortingDirectionAsc],
  );

  return (
    <Toolbar>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        spacing={2}
      >
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={openCreateTaskDialog}
          >
            Создать
          </Button>
        </Grid>

        <Grid
          item
          zeroMinWidth
          container
          justify="flex-end"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item zeroMinWidth>
            <Select
              value={sortingField}
              style={{ maxWidth: '100%' }}
              onChange={changeSortingField}
            >
              {
                TASK_SORTING_MODES.map(sortingMode => (
                  <MenuItem
                    key={sortingMode.field}
                    value={sortingMode.field}
                  >
                    {sortingMode.label}
                  </MenuItem>
                ))
              }
            </Select>
          </Grid>

          {
            isSortingDirectionButtonShown && (
              <Grid item>
                <Tooltip title={sortingDirectionLabel}>
                  <IconButton onClick={toggleSortingDirection}>
                    {
                      isSortingDirectionAsc ? (<ArrowDownwardIcon/>) : (<ArrowUpwardIcon/>)
                    }
                  </IconButton>
                </Tooltip>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default MainToolbar;
