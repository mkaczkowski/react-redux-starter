//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import { host } from 'storybook-host';

const props: any = {
  label: 'Test',
};

storiesOf('Common|Input', module)
  .addDecorator(host({ align: 'center top' }))
  .add('base', () => <Input type="text" name="name" {...props} label={undefined} />)
  .add('with_label', () => <Input type="text" name="name" {...props} />)
  .add('required', () => <Input type="text" name="name" {...props} required />)
  .add('with_value', () => <Input type="text" name="name" {...props} value="test value" />)
  .add('maxLength_4', () => <Input type="text" name="name" {...props} maxLength={4} />)
  .add('invalid', () => <Input type="email" name="name" {...props} error="Test error" touched={true} />)
  .add('disabled', () => <Input type="text" name="name" {...props} disabled />);
