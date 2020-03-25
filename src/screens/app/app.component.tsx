import React from 'react';
import { Router } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { createBrowserHistory } from 'history';

import { Network } from 'src/components';

import SW from './components/sw/sw.component';
import Routes from './routes/routes.component';

const history = createBrowserHistory();

if (isMobile) {
  console.log('Mobile browser!');
}

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
      <SW />
    </Router>
  );
};

export default process.env.NODE_ENV === 'production'
  ? App
  : require('react-hot-loader').hot(module)(App);
