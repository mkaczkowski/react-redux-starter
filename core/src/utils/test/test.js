import React from 'react';
import { ConnectedRouter, connectRouter } from 'connected-react-router/immutable';
import { Router } from 'react-router-dom';
import authReducer from '@core/reducers/auth';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export function renderWithReduxAndRouter(
  ui,
  { initialState, store = createStore(connectRouter(history)(authReducer), fromJS(initialState)) } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <ConnectedRouter history={history}>{ui}</ConnectedRouter>
      </Provider>
    ),
    store,
    history,
  };
}

export function renderWithRouter(ui) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}
