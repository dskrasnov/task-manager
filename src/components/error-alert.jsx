import React from 'react';
import PropTypes from 'prop-types';

import { Alert, AlertTitle } from '@material-ui/lab';

const ErrorAlert = ({ error: { id, text }, onClose }) => {
  const closeHandler = () => onClose(id);

  return (
    <Alert
      severity="error"
      variant="filled"
      closeText="Закрыть"
      // eslint-disable-next-line react/jsx-no-bind
      onClose={closeHandler}
    >
      <AlertTitle>Ошибка</AlertTitle>
      {text}
    </Alert>
  );
};

ErrorAlert.propTypes = {
  error: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func,
};

export default ErrorAlert;
