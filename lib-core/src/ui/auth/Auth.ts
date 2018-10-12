import * as React from 'react';
// import type { ActionType } from 'core/src/constants/flowTypes';
import CONFIG from 'lib-core/src/config';

export type AuthProps = {
  children?: any;
  isLoading?: boolean;
  actions?: {
    authAction: ActionType;
  };
};

class Auth extends React.Component<AuthProps> {
  componentDidMount() {
    const { actions } = this.props;
    //TODO remove data
    if (actions) {
      actions.authAction({
        email: CONFIG.api.userLogin,
        password: CONFIG.api.userPassword,
        remember_me: '0',
      });
    }
  }

  render() {
    return this.props.isLoading ? 'Loading....' : this.props.children;
  }
}

export default Auth;
