import { RESET_AUTHORIZATION_STATE } from '../constants/action-types';

const resetAuthorizationState = () => ({
  type: RESET_AUTHORIZATION_STATE,
});

export default resetAuthorizationState;
