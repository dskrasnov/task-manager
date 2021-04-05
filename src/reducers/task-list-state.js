import { SET_TASK_LIST_STATE } from '../constants/action-types';

const defaultState = {
  isInitialDataLoaded: false,
};

const taskListStateReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_TASK_LIST_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default taskListStateReducer;
