// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import Hero from './view/hero/Loadable';
import { Link, Route, Switch } from 'react-router-dom';
import I18nProvider from '@core/providers/i18n';
import Auth from '@core/ui/auth';
import Main from './view/main';
import './app.scss';
import PrivateRoute from '@core/ui/privateRoute';
import Login from './view/login';

type AppProps = {
  store: Object,
  routes: Object,
};

const App = (props: AppProps) => (
  <Auth>
    <I18nProvider language={'en'}>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/hero" component={Hero} />
          <Route path="" render={() => <div>404</div>} />
        </Switch>
      </div>
    </I18nProvider>
  </Auth>
);

export default hot(module)(App);
