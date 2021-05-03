import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import resetAuthorizationState from '../action-creators/reset-authorization-state';
import setLoginDialogOpen from '../action-creators/set-login-dialog-open';

const Header = () => {
  const isAuthorized = !!useSelector(state => state.authorizationState.token);

  const buttonLabel = isAuthorized ? 'Выйти' : 'Войти';

  const dispatch = useDispatch();

  const logoutOrOpenLoginDialog = useCallback(
    () => (isAuthorized
      ? dispatch(resetAuthorizationState())
      : dispatch(setLoginDialogOpen(true))),
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
