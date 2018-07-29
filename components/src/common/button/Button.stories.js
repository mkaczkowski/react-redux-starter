//@flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import Button from './Button';
import type { ButtonProps } from './Button';

const props: ButtonProps = {
  label: 'TEST',
  onClick: action('click'),
};

storiesOf('Common|Button', module)
  .addDecorator(host({ align: 'center top' }))
  .add('base', () => <Button {...props} />)
  .add('flat', () => <Button {...props} flat />)
  .add('fluid', () => <Button {...props} fluid />)
  .add('link', () => <Button {...props} href="/register" target="_blank" />)
  .add('disabled', () => <Button {...props} disabled />)
  .add('loading', () => <Button {...props} loading />)
  .add('primary', () => (
    <div>
      <div style={{ margin: '20px' }}>
        <Button {...props} primary />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} primary flat />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} primary href="/register" target="_blank" />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} primary disabled />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} primary loading />
      </div>
    </div>
  ))
  .add('secondary', () => (
    <div>
      <div style={{ margin: '20px' }}>
        <Button {...props} secondary />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} secondary flat />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} secondary href="/register" target="_blank" />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} secondary disabled />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} secondary loading />
      </div>
    </div>
  ))
  .add('info', () => (
    <div>
      <div style={{ margin: '20px' }}>
        <Button {...props} info />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} info flat />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} info href="/register" target="_blank" />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} info disabled />
      </div>
      <div style={{ margin: '20px' }}>
        <Button {...props} info loading />
      </div>
    </div>
  ));
