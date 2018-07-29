// @flow
import * as React from 'react';
import Button from '@components/common/button/Button';
import './PasswordWithReveal.scss';
import PasswordInputConfig, { PasswordInputComponent } from '@components/form/inputs/password/Password';
import { createConfig } from '@components/form/inputs/FormField';

class PasswordWithRevealInput extends React.Component<any, { visible: boolean }> {
  state = {
    visible: false,
  };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { Component, ...props } = this.props;
    const { visible } = this.state;

    const label = visible ? props.t('BUTTON.HIDE') : props.t('BUTTON.SHOW');

    const componentProps = {
      ...props,
      type: visible ? 'input' : 'password',
    };

    return (
      <Component
        {...componentProps}
        renderProp={() => (
          <div className="password-wrapper">
            <Button small raised primary label={label} onClick={this.toggleVisibility} />
          </div>
        )}
      />
    );
  }
}

const PasswordWithRevealInputConfig = createConfig({
  config: PasswordInputConfig,
  component: PasswordWithRevealInput,
  wrapper: PasswordInputComponent,
});

export default PasswordWithRevealInputConfig;
