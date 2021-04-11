import React from 'react';

import { Backdrop, CircularProgress } from '@material-ui/core';

import useStyles from '../use-styles';

const AppLoadingIndicator = () => {
  const classes = useStyles();

  return (
    <Backdrop open className={classes.appLoadingIndicator}>
      <CircularProgress color="inherit"/>
    </Backdrop>
  );
};

export default AppLoadingIndicator;
