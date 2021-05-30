import { call, select, takeEvery } from 'redux-saga/effects';

import { createBrowserHistory } from 'history';

import { SET_TASK_LIST_STATE } from '../constants/action-types';
import { TASK_SORTING_FIELD } from '../constants/commons';

const buildQueryString = queryObject => Object.keys(queryObject)
  .map(key => `${key}=${queryObject[key]}`)
  .join('&');

function* saveTaskListData({ payload: { currentPage, sortingField, sortingDirection }, isUnnecessaryForHistory }) {
  if (isUnnecessaryForHistory || !currentPage && !sortingField && !sortingDirection) return;

  const history = createBrowserHistory();

  const { taskListState } = yield select();

  const finalSortingField = sortingField || taskListState.sortingField;
  const isNoSorting = finalSortingField === TASK_SORTING_FIELD.NO_SORTING;

  const queryString = buildQueryString({
    page: currentPage || taskListState.currentPage,
    ...(!isNoSorting && { sort_field: finalSortingField }),
    ...(!isNoSorting && { sort_direction: sortingDirection || taskListState.sortingDirection }),
  });

  yield call(history.push, `?${queryString}`);
}

function* saveTaskListDataSaga() {
  yield takeEvery(SET_TASK_LIST_STATE, saveTaskListData);
}

export default saveTaskListDataSaga;
