import Cookies from 'js-cookie';

import setAuthorizationState from './set-authorization-state';
import resetAuthorizationState from './reset-authorization-state';

const readAuthorizationData = () => dispatch => {
  const token = Cookies.get('token');
  const tokenExpires = Cookies.get('tokenExpires');

  if (!token) return;

  dispatch(setAuthorizationState({ token, tokenExpires }));

  const timeout = new Date(tokenExpires).getTime() - new Date().getTime();

  setTimeout(() => dispatch(resetAuthorizationState()), timeout);
};

export default readAuthorizationData;
