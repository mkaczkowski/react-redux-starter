import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
import createStore from '@core/store/createStore';
import { setupTranslations } from '@core/utils/i18n';
import { ConnectedRouter as Router } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import '@core/api';

if (process.env.NODE_ENV !== 'production' && process.env.WHY_DID_UPDATE === 'true') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
}

if (process.env.LOGS === 'true') {
  const Logger = require('@core/modules/logger').default;
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
