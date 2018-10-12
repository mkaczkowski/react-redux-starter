
import * as React from 'react';
// import type { InputConfig } from 'lib-core/src/utils/validation/validators';
import { Field } from 'formik';
import { prepareInput } from 'lib-components/src/form/inputs/FormField';
import InputField from 'lib-components/src/form/fields/InputField';
// import Inputs from 'lib-components/src/constants/inputs';

export const INPUT_CONFIG: InputConfig = {
  isRequired: true,
  isEmail: true,
};

//prettier-ignore
export const EmailInputComponent = ({ renderProp, ...props }: any) => (
  <Field name={INPUTS.EMAIL}
         component={InputField}
         label={'LABEL.EMAIL'}
         maxLength={100}
         {...props} />
);

const EmailInput = (options: InputConfig) => prepareInput(INPUT_CONFIG, options, EmailInputComponent);

export default EmailInput;
