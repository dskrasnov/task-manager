import axios from 'axios';

import setTasks from './set-tasks';
import addError from './add-error';
import setTaskListState from './set-task-list-state';

import { BACKEND_STATUS, BACKEND_URL, DEVELOPER_NAME } from '../constants/commons';

const fetchTasks = isInitialDataLoading => dispatch => axios
  .get(`${BACKEND_URL}?developer=${DEVELOPER_NAME}`)
  .then(response => {
    if (response.data.status === BACKEND_STATUS.OK) dispatch(setTasks(response.data.message.tasks));
    if (response.data.status === BACKEND_STATUS.ERROR) dispatch(addError(response.data.message));
  })
  .catch(() => dispatch(addError('При загрузке задач что-то пошло не так.')))
  .then(() => {
    if (isInitialDataLoading) dispatch(setTaskListState({ isInitialDataLoaded: true }));
  });

export default fetchTasks;
