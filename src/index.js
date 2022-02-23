import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './config/web3'

ReactDOM.render(

  <Web3ReactProvider getLibrary={getLibrary}>
    <App/>
  </Web3ReactProvider>

  , document.getElementById('root')
);