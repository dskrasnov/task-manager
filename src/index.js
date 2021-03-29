import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';

import App from './app';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <CssBaseline/>
    <App/>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
