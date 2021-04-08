import axios from 'axios';

import setTasks from './set-tasks';
import addError from './add-error';
import setTaskListState from './set-task-list-state';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  TASKS_PER_PAGE,
} from '../constants/commons';

const fetchTasks = (currentPage, isInitialDataLoading) => dispatch => axios
  .get(`${BACKEND_URL}?developer=${DEVELOPER_NAME}&page=${currentPage}`)
  .then(({ data: { message, status } }) => {
    if (status === BACKEND_STATUS.OK) {
      dispatch(setTaskListState({
        pagesTotal: Math.ceil(message.total_task_count / TASKS_PER_PAGE),
        currentPage,
      }));

      dispatch(setTasks(message.tasks));
    }

    if (status === BACKEND_STATUS.ERROR) dispatch(addError(message));
  })
  .catch(() => dispatch(addError('При загрузке задач что-то пошло не так.')))
  .then(() => {
    if (isInitialDataLoading) dispatch(setTaskListState({ isInitialDataLoaded: true }));
  });

export default fetchTasks;
