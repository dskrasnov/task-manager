import {
  SET_AUTHORIZATION_STATE,
  LOGOUT,
} from '../constants/action-types';

const defaultState = {
  isAuthorized: false,
};

const authorizationStateReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_AUTHORIZATION_STATE:
      return { ...payload };

    case LOGOUT:
      return defaultState;

    default:
      return state;
  }
};

export default authorizationStateReducer;
