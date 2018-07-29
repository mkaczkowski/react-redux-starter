// @flow
import * as React from 'react';
import type { InputConfig } from '@core/utils/validation/validators';
import { getValidators } from '@core/utils/validation/validators';

const FormField = ({ inputs, name, ...props }: any) => {
  const Component = inputs[name].Component;
  return <Component {...props} />;
};

export const createConfig = ({ config, component: Component, wrapper }: any) => (options: any) => ({
  ...config(options),
  Component: props => <Component Component={wrapper} {...props} />,
});

export const prepareInput = (defaultOptions: InputConfig, extraOptions: InputConfig, Component: any) => {
  const { value, ...options } = { ...defaultOptions, ...(extraOptions || {}) };
  const config = {};
  config.validators = getValidators(options);
  config.Component = Component;
  config.value = value;
  return config;
};

export default FormField;
