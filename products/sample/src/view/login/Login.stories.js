//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { t } from '@core/utils/i18n/translate';
import { action } from '@storybook/addon-actions';
import Login from './Login';
import { inputs } from '@components/form/login/LoginForm';

const props: any = {
  t,
  children: undefined,
  onError: action('onError'),
  onSubmitHandler: action('submit'),
  inputs,
  debug: true,
};

storiesOf('Sections|Login', module).add('sample', () => <Login {...props} />);
