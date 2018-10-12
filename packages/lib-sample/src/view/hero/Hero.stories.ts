import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './Hero';
import { t } from 'lib-core/src/utils/i18n/translate';

const props = {
  t,
};

storiesOf('Sections|Hero', module).add('sample', () => <Hero {...props} />);