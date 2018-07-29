//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './Hero';
import { t } from '@core/utils/i18n/translate';

const props: any = {
  t,
};

storiesOf('Sections|Hero', module).add('sample', () => <Hero {...props} />);
