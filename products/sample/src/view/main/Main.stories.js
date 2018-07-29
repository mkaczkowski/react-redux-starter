//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Main from './Main';

const props: any = {};

storiesOf('Sections|Main', module).add('sample', () => <Main {...props} />);
