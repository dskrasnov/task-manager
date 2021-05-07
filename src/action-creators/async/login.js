import axios from 'axios';

import Cookies from 'js-cookie';

import resetLoginDialogState from '../reset-login-dialog-state';
import setLoginDialogFieldError from '../set-login-dialog-field-error';
import setLoginDialogBusy from '../set-login-dialog-busy';
import setLoginDialogGeneralError from '../set-login-dialog-general-error';
import readAuthorizationData from './read-authorization-data';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
} from '../../constants/commons';

const login = () => (dispatch, getState) => {
  const { loginDialogState: { fieldValue: { username, password } } } = getState();

  const formData = new FormData();

  formData.append('username', username);
  formData.append('password', password);

  dispatch(setLoginDialogBusy(true));

  return axios
    .post(`${BACKEND_URL}login?developer=${DEVELOPER_NAME}`, formData)
    .then(({ data: { message, status } }) => {
      if (status === BACKEND_STATUS.OK) {
        const tokenExpires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

        Cookies.set('token', message.token, {
          expires: tokenExpires,
          sameSite: 'strict',
        });

        Cookies.set('tokenExpires', tokenExpires, {
          expires: tokenExpires,
          sameSite: 'strict',
        });

        dispatch(readAuthorizationData());
        dispatch(resetLoginDialogState());
      }

      if (status === BACKEND_STATUS.ERROR) {
        dispatch(setLoginDialogFieldError(message));
        dispatch(setLoginDialogBusy(false));
      }
    })
    .catch(() => {
      dispatch(setLoginDialogGeneralError('При входе что-то пошло не так.'));
      dispatch(setLoginDialogBusy(false));
    });
};

export default login;
