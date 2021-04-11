import { SET_TASK_LIST_STATE } from '../constants/action-types';
import { TASK_SORTING_DIRECTION, TASK_SORTING_FIELD } from '../constants/commons';

const defaultState = {
  isInitialDataLoaded: false,
  pagesTotal: 0,
  currentPage: 1,
  sortingField: TASK_SORTING_FIELD.NO_SORTING,
  sortingDirection: TASK_SORTING_DIRECTION.ASC,
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
