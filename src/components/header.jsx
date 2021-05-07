import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import resetAuthorizationState from '../action-creators/reset-authorization-state';
import setDialogOpen from '../action-creators/set-dialog-open';

import { DIALOG_NAME } from '../constants/commons';

const Header = () => {
  const isAuthorized = !!useSelector(state => state.authorizationState.token);

  const buttonLabel = isAuthorized ? 'Выйти' : 'Войти';

  const dispatch = useDispatch();

  const logoutOrOpenLoginDialog = useCallback(
    () => (isAuthorized
      ? dispatch(resetAuthorizationState())
      : dispatch(setDialogOpen(DIALOG_NAME.LOGIN, true))),
    [isAuthorized, dispatch],
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Задачи</Typography>
        <div style={{ flexGrow: 1 }}/>
        <Button color="inherit" onClick={logoutOrOpenLoginDialog}>{buttonLabel}</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
