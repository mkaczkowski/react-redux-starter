// @flow
import * as React from 'react';
import type { InputConfig } from '@core/utils/validation/validators';
import INPUTS from '@components/constants/inputs';
import { Field } from 'formik';
import { prepareInput } from '@components/form/inputs/FormField';
import InputField from '@components/form/fields/InputField';

export const INPUT_CONFIG: InputConfig = {
  isRequired: true,
  hasMinChars: true,
};

export const PasswordInputComponent = (props: any) => (
  <Field
    type="password"
    name={INPUTS.PASSWORD}
    component={InputField}
    label={props.t('LABEL.PASSWORD')}
    maxLength={100}
    {...props}
  />
);

const PasswordInput = (options: InputConfig) => prepareInput(INPUT_CONFIG, options, PasswordInputComponent);

export default PasswordInput;
