import {
  SET_AUTHORIZATION_STATE,
  RESET_AUTHORIZATION_STATE,
} from '../constants/action-types';

const defaultState = {
  token: null,
  tokenExpires: null,
};

const authorizationStateReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_AUTHORIZATION_STATE:
      return { ...payload };

    case RESET_AUTHORIZATION_STATE:
      return defaultState;

    default:
      return state;
  }
};

export default authorizationStateReducer;
