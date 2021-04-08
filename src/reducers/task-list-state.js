import { SET_TASK_LIST_STATE } from '../constants/action-types';

const defaultState = {
  isInitialDataLoaded: false,
  pagesTotal: 0,
  currentPage: 0,
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
