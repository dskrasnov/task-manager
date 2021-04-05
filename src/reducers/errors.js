import { ADD_ERROR, REMOVE_ERROR } from '../constants/action-types';

const defaultState = [];

const errorsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_ERROR:
      return [...state, {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        text: payload,
      }];

    case REMOVE_ERROR:
      return state.filter(error => error.id !== payload);

    default:
      return state;
  }
};

export default errorsReducer;
