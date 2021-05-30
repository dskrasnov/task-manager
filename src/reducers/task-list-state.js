import { SET_TASK_LIST_STATE } from '../constants/action-types';
import { TASK_LIST_DEFAULT_STATE } from '../constants/commons';

const taskListStateReducer = (state = TASK_LIST_DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_TASK_LIST_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default taskListStateReducer;
