import { SET_TASK_LIST_STATE } from '../constants/action-types';

const setTaskListState = (state, isUnnecessaryForHistory) => ({
  type: SET_TASK_LIST_STATE,
  payload: state,
  isUnnecessaryForHistory,
});

export default setTaskListState;
