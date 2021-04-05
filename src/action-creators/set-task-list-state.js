import { SET_TASK_LIST_STATE } from '../constants/action-types';

const setTaskListState = state => ({
  type: SET_TASK_LIST_STATE,
  payload: state,
});

export default setTaskListState;
