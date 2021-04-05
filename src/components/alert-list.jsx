import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import ErrorAlert from './error-alert';

import useStyles from '../styles';

import removeError from '../action-creators/remove-error';

const AlertList = ({ errors }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const closeHandler = useCallback(id => dispatch(removeError(id)), []);

  return (
    <div className={classes.gridWrapper}>
      <Grid container direction="column" spacing={1} className={classes.grid}>
        {
          errors.map(error => (
            <Grid key={error.id} item>
              <ErrorAlert error={error} onClose={closeHandler}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

AlertList.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AlertList;
