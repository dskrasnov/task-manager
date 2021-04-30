import React from 'react';
import PropTypes from 'prop-types';

import { Button, CircularProgress } from '@material-ui/core';

import useStyles from '../use-styles';

const BusiableButton = ({ busy, children, color, disabled, ...rest }) => {
  const classes = useStyles();

  const buttonDisabled = disabled || busy;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button color={color} disabled={buttonDisabled} {...rest}>
      {children}
      {
        busy && (
          <CircularProgress
            size={20}
            color={color}
            className={classes.buttonLoadingIndicator}
          />
        )
      }
    </Button>
  );
};

BusiableButton.propTypes = {
  busy: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  disabled: PropTypes.bool,
};

export default BusiableButton;
