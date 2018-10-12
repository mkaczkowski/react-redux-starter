
import * as React from 'react';
// import type { InputConfig } from 'lib-core/src/utils/validation/validators';
import Inputs from 'lib-components/src/constants/inputs';
import { Field } from 'formik';
import { prepareInput } from 'lib-components/form/inputs/FormField';
import InputField from 'lib-components/src/form/fields/InputField';

export const INPUT_CONFIG: InputConfig = {
  isRequired: true,
  hasMinChars: true,
};

export const PasswordInputComponent = (props: any) => (
  <Field
    type="password"
    name={INPUTS.PASSWORD}
    component={InputField}
    label={'LABEL.PASSWORD'}
    maxLength={100}
    {...props}
  />
);

const PasswordInput = (options: InputConfig) => prepareInput(INPUT_CONFIG, options, PasswordInputComponent);

export default PasswordInput;
