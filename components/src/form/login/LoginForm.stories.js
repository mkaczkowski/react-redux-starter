//@flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginForm, { inputs } from './LoginForm';
import { t } from '@core/utils/i18n/translate';

const props: any = {
  t,
  children: undefined,
  onError: action('onError'),
  onSubmitHandler: action('submit'),
  inputs,
  debug: true,
};

//prettier-ignore
storiesOf('Form/Login', module)
  .add('basic', () => <LoginForm {...props} />);
