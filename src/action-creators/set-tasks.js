import { SET_TASKS } from '../constants/action-types';

const setTasks = tasks => ({
  type: SET_TASKS,
  payload: tasks,
});

export default setTasks;
