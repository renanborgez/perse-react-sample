import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Perse from '@cyberlabsai/perse-sdk-js'
import './index.css';

Perse.init(process.env.REACT_APP_PERSE_API);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
