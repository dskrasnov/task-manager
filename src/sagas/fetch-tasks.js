import axios from 'axios';

import { call, put, takeEvery, select } from 'redux-saga/effects';

import addError from '../action-creators/add-error';
import setTaskListState from '../action-creators/set-task-list-state';
import setTasks from '../action-creators/set-tasks';

import { FETCH_TASKS } from '../constants/action-types';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  TASK_SORTING_FIELD,
  TASK_STATUS_MASK,
  TASKS_PER_PAGE,
} from '../constants/commons';

function* fetchTasks({ params: { currentPage, sortingField, sortingDirection }, isInitialDataLoading }) {
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
        yield put(setTaskListState({
          pagesTotal: Math.ceil(message.total_task_count / TASKS_PER_PAGE),
          ...(currentPage && { currentPage }),
          ...(sortingField && { sortingField }),
          ...(sortingDirection && { sortingDirection }),
        }));

        yield put(setTasks(message.tasks.map(({ status: taskStatus, ...rest }) => {
          const binaryStatus = parseInt(taskStatus, 2);

          /* eslint-disable no-bitwise */

          const isEdited = !!(binaryStatus & TASK_STATUS_MASK.EDITED);
          const isDone = !!(binaryStatus & TASK_STATUS_MASK.DONE);

          /* eslint-enable no-bitwise */

          return { ...rest, isEdited, isDone };
        })));

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
  yield takeEvery(FETCH_TASKS, fetchTasks);
}

export default fetchTasksSaga;
