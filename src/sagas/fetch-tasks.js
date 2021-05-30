import axios from 'axios';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import addError from '../action-creators/add-error';
import setTaskListState from '../action-creators/set-task-list-state';
import setTasks from '../action-creators/set-tasks';
import fetchTasksActionCreator from '../action-creators/fetch-tasks';

import adaptTask from '../utils/adapt-task';

import { FETCH_TASKS } from '../constants/action-types';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  TASK_SORTING_FIELD,
  TASKS_PER_PAGE,
} from '../constants/commons';

function* fetchTasks({
  params: { currentPage, sortingField, sortingDirection },
  isInitialDataLoading,
  isUnnecessaryForHistory,
}) {
  try {
    const { taskListState } = yield select();

    const requestParams = {
      ...taskListState,
      ...(currentPage && { currentPage }),
      ...(sortingField && { sortingField }),
      ...(sortingDirection && { sortingDirection }),
    };

    const currentPageParam = requestParams.currentPage ? `&page=${requestParams.currentPage}` : '';

    const sortingFieldParam = requestParams.sortingField !== TASK_SORTING_FIELD.NO_SORTING
      ? `&sort_field=${requestParams.sortingField}`
      : '';

    const sortingDirectionParam = requestParams.sortingField !== TASK_SORTING_FIELD.NO_SORTING
      ? `&sort_direction=${requestParams.sortingDirection}`
      : '';

    const {
      data: {
        message,
        status: requestStatus,
      },
    } = yield call(
      axios.get,
      `${BACKEND_URL}?developer=${DEVELOPER_NAME}${currentPageParam}${sortingFieldParam}${sortingDirectionParam}`,
    );

    switch (requestStatus) {
      case BACKEND_STATUS.OK: {
        const pagesTotal = Math.ceil(message.total_task_count / TASKS_PER_PAGE);

        if (currentPage && currentPage > 1 && currentPage > pagesTotal) {
          yield put(fetchTasksActionCreator(
            {
              currentPage: pagesTotal || 1,
              ...(sortingField && { sortingField }),
              ...(sortingDirection && { sortingDirection }),
            },
            isInitialDataLoading,
            isUnnecessaryForHistory,
          ));

          return;
        }

        yield put(setTaskListState({
          pagesTotal,
          ...(currentPage && { currentPage }),
          ...(sortingField && { sortingField }),
          ...(sortingDirection && { sortingDirection }),
        }, isUnnecessaryForHistory));

        yield put(setTasks(message.tasks.map(adaptTask)));

        break;
      }

      case BACKEND_STATUS.ERROR: {
        yield put(addError(message));

        break;
      }

      default:
        // no default
    }
  } catch (error) {
    yield put(addError('При загрузке задач что-то пошло не так.'));
  }

  if (isInitialDataLoading) yield put(setTaskListState({ isInitialDataLoaded: true }));
}

function* fetchTasksSaga() {
  yield takeLatest(FETCH_TASKS, fetchTasks);
}

export default fetchTasksSaga;
