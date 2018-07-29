//@flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';

const props = {
  onSubmitHandler: action('submit'),
};

export default props;
