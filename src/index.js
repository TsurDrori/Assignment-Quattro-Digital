import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import { RootCmp } from './RootCmp';

ReactDOM.render(
  <React.StrictMode>
      <RootCmp />
  </React.StrictMode>,
  document.getElementById('root')
);
