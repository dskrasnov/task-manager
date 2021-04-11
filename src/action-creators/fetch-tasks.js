import axios from 'axios';

import setTasks from './set-tasks';
import addError from './add-error';
import setTaskListState from './set-task-list-state';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME, TASK_SORTING_FIELD,
  TASKS_PER_PAGE,
} from '../constants/commons';

const fetchTasks = (
  { currentPage, sortingField, sortingDirection },
  isInitialDataLoading,
) => (dispatch, getState) => {
  const { taskListState } = getState();

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

  return axios
    .get(`${BACKEND_URL}?developer=${DEVELOPER_NAME}${currentPageParam}${sortingFieldParam}${sortingDirectionParam}`)
    .then(({ data: { message, status } }) => {
      if (status === BACKEND_STATUS.OK) {
        dispatch(setTaskListState({
          pagesTotal: Math.ceil(message.total_task_count / TASKS_PER_PAGE),
          ...(currentPage && { currentPage }),
          ...(sortingField && { sortingField }),
          ...(sortingDirection && { sortingDirection }),
        }));

        dispatch(setTasks(message.tasks));
      }

      if (status === BACKEND_STATUS.ERROR) dispatch(addError(message));
    })
    .catch(() => dispatch(addError('При загрузке задач что-то пошло не так.')))
    .then(() => {
      if (isInitialDataLoading) dispatch(setTaskListState({ isInitialDataLoaded: true }));
    });
};

export default fetchTasks;
