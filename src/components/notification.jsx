import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import hideNotification from '../action-creators/hide-notification';

const Notification = () => {
  const { isOpen, type, text } = useSelector(state => state.notification);

  const dispatch = useDispatch();

  const close = useCallback(
    (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      dispatch(hideNotification());
    },
    [dispatch],
  );

  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={close}>
      <Alert severity={type} variant="filled" elevation={4} onClose={close}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
