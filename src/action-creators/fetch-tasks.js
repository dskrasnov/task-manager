import { FETCH_TASKS } from '../constants/action-types';

const fetchTasks = (params = {}, isInitialDataLoading, isUnnecessaryForHistory) => ({
  type: FETCH_TASKS,
  params,
  isInitialDataLoading,
  isUnnecessaryForHistory,
});

export default fetchTasks;
