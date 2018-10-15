import * as React from 'react';
import { ActionFunction1 } from 'redux-actions';
import { LoginFormPayload } from '../../model/LoginFormPayload';

export type LoginProps = {
  isLoading?: boolean;
  actions: {
    loginAction: ActionFunction1<LoginFormPayload, any>;
  };
};

class Login extends React.Component<LoginProps> {
  componentDidMount() {
    const { actions } = this.props;
    actions.loginAction({
      username: 'test_username',
      password: 'test_pass',
    });
  }

  render() {
    return this.props.isLoading ? 'Loading....' : this.props.children;
  }
}

export default Login;
