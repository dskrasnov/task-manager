import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import ErrorAlert from './error-alert';

import useStyles from '../use-styles';

import removeError from '../action-creators/remove-error';

const AlertList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const closeErrorAlert = useCallback(id => dispatch(removeError(id)), [dispatch]);

  const errors = useSelector(state => state.errors);
  if (!errors.length) return null;

  return (
    <div className={classes.gridWrapper}>
      <Grid container direction="column" spacing={1} className={classes.grid}>
        {
          errors.map(error => (
            <Grid key={error.id} item>
              <ErrorAlert error={error} onClose={closeErrorAlert}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default AlertList;
