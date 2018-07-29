import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
import createStore from '@core/store/createStore';
import { setupTranslations } from '@core/utils/i18n';
import { ConnectedRouter as Router } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import '@core/api';

if (process.env.DISABLE_MODERNIZR !== 'true') {
  require('modernizr');
}

if (process.env.NODE_ENV !== 'production' && process.env.WHY_DID_UPDATE === 'true') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
}

if (process.env.INCLUDE_SERVICE_WORKER === 'true') {
  const registerServiceWorker = require('@core/registerServiceWorker').default;
  registerServiceWorker();
}

export async function init() {
  if (process.env.LOGS === 'true') {
    const Logger = require('@core/modules/logger').default;
    Logger.run();
  }

  if (process.env.DISABLE_TRANSLATIONS !== 'true') {
    window.translations = await setupTranslations();
  }

  const store = createStore();
  const MOUNT_NODE = document.getElementById('root');

  if (MOUNT_NODE.hasChildNodes()) {
    hydrate(
      <Provider store={store}>
        <Router history={store.history}>
          <App />
        </Router>
      </Provider>,
      MOUNT_NODE
    );
  } else {
    render(
      <Provider store={store}>
        <Router history={store.history}>
          <App />
        </Router>
      </Provider>,
      MOUNT_NODE
    );
  }
}

init();
