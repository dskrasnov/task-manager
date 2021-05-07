import axios from 'axios';

import Cookies from 'js-cookie';

import resetDialogState from '../reset-dialog-state';
import setDialogFieldError from '../set-dialog-field-error';
import setDialogBusy from '../set-dialog-busy';
import setDialogGeneralError from '../set-dialog-general-error';
import readAuthorizationData from './read-authorization-data';

import {
  BACKEND_STATUS,
  BACKEND_URL,
  DEVELOPER_NAME,
  DIALOG_NAME,
} from '../../constants/commons';

const login = () => (dispatch, getState) => {
  const { dialogState: { [DIALOG_NAME.LOGIN]: { fieldValue: { username, password } } } } = getState();

  const formData = new FormData();

  formData.append('username', username);
  formData.append('password', password);

  dispatch(setDialogBusy(DIALOG_NAME.LOGIN, true));

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
        dispatch(resetDialogState(DIALOG_NAME.LOGIN));
      }

      if (status === BACKEND_STATUS.ERROR) {
        dispatch(setDialogFieldError(DIALOG_NAME.LOGIN, message));
        dispatch(setDialogBusy(DIALOG_NAME.LOGIN, false));
      }
    })
    .catch(() => {
      dispatch(setDialogGeneralError(DIALOG_NAME.LOGIN, 'При входе что-то пошло не так.'));
      dispatch(setDialogBusy(DIALOG_NAME.LOGIN, false));
    });
};

export default login;
