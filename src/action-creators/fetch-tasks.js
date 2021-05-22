import { FETCH_TASKS } from '../constants/action-types';

const fetchTasks = (params = {}, isInitialDataLoading) => ({
  type: FETCH_TASKS,
  params,
  isInitialDataLoading,
});

export default fetchTasks;
