import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// @ts-ignore
import { ConnectedRouter } from 'connected-react-router/immutable';
import createStore from 'lib-core/src/store/createStore';
import App from './App';

// import 'core/src/api';
// import * as saaa from '@components';

//
// if (process.env.NODE_ENV !== 'production' && process.env.WHY_DID_UPDATE === 'true') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React, { include: /^pure/, exclude: /^Connect/ });
// }

const store = createStore();

const MOUNT_NODE = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={store.history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
