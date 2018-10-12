import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Auth from 'lib-core/src/ui/auth';
import Main from './view/main';

// import Hero from './view/hero';
// import PrivateRoute from 'core/src/ui/privateRoute';
// import Login from './view/login';

// const App = (props: AppProps) => (
const App = () => (
  <Auth>
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
  </Auth>
);

export default hot(module)(App);
