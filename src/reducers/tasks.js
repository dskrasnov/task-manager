import { SET_TASKS } from '../constants/action-types';

const defaultState = [];

const tasksReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_TASKS:
      return [...payload];

    default:
      return state;
  }
};

export default tasksReducer;
