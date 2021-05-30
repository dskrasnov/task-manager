import { call, put, select, takeEvery } from 'redux-saga/effects';

import { createBrowserHistory } from 'history';

import fetchTasks from '../action-creators/fetch-tasks';

import { READ_TASK_LIST_DATA } from '../constants/action-types';

import {
  TASK_LIST_DEFAULT_STATE,
  TASK_SORTING_DIRECTION,
  TASK_SORTING_FIELD,
} from '../constants/commons';

const parseQueryString = queryString => {
  if (!queryString) return {};

  return queryString
    .split('&')
    .reduce((params, param) => {
      const [key, value] = param.split('=');

      return {
        ...params,
        [key]: value,
      };
    }, {});
};

function* readTaskListData() {
  const history = createBrowserHistory();

  const {
    page,
    sort_field: sortingField,
    sort_direction: sortingDirection,
  } = yield call(parseQueryString, history.location.search.substr(1));

  const currentPage = parseInt(page, 10);

  const isCurrentPageValid = !Number.isNaN(currentPage) && currentPage > 0;
  const isSortingFieldValid = Object.values(TASK_SORTING_FIELD).includes(sortingField);
  const isSortingDirectionValid = Object.values(TASK_SORTING_DIRECTION).includes(sortingDirection);

  const { taskListState: { isInitialDataLoaded } } = yield select();
  const isInitialDataLoading = !isInitialDataLoaded;

  const {
    currentPage: defaultCurrentPage,
    sortingField: defaultSortingField,
    sortingDirection: defaultSortingDirection,
  } = TASK_LIST_DEFAULT_STATE;

  yield put(fetchTasks({
    ...TASK_LIST_DEFAULT_STATE,
    ...(isCurrentPageValid ? { currentPage } : { currentPage: defaultCurrentPage }),
    ...(isSortingFieldValid ? { sortingField } : { sortingField: defaultSortingField }),
    ...(isSortingDirectionValid ? { sortingDirection } : { sortingDirection: defaultSortingDirection }),
  }, isInitialDataLoading, true));
}

function* readTaskListDataSaga() {
  yield takeEvery(READ_TASK_LIST_DATA, readTaskListData);
}

export default readTaskListDataSaga;
