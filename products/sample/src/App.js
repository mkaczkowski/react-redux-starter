import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Link, Route, Switch } from 'react-router-dom';
import Main from './view/main';
// import Hero from './view/hero';
// import PrivateRoute from '@core/ui/privateRoute';
// import Login from './view/login';
import './app.scss';

// import Auth from '@core/ui/auth';

// type AppProps = {
//   store: Object,
//   routes: Object,
// };

// const App = (props: AppProps) => (
const App = props => (
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
      {/*<Route path="/login" component={Login} />*/}
      {/*<PrivateRoute path="/hero" component={Hero} />*/}
      {/*<Route path="" render={() => <div>404</div>} />*/}
    </Switch>
  </div>
);

// {
//   /* <Auth>
//        <I18nProvider language={'en'}>
//
//        </I18nProvider>
//      </Auth>*/
// };

export default hot(module)(App);
