import React from 'react';
import { render } from 'react-dom';
import App from './App';
import createStore from 'core/src/store/createStore';
// import * as saaa from '@components';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import 'core/src/api';

//
// if (process.env.NODE_ENV !== 'production' && process.env.WHY_DID_UPDATE === 'true') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
// }

if (process.env.LOGS === 'true') {
  const Logger = require('core/src/modules/logger').default;
  Logger.run();
}

const store = createStore();

const MOUNT_NODE = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={store.history}>
      <App />
    </Router>
  </Provider>,
  MOUNT_NODE
);
