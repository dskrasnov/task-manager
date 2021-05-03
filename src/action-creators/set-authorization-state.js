import { SET_AUTHORIZATION_STATE } from '../constants/action-types';

const setAuthorizationState = state => ({
  type: SET_AUTHORIZATION_STATE,
  payload: state,
});

export default setAuthorizationState;
