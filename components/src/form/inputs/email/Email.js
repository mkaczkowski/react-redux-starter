// @flow
import * as React from 'react';
import type { InputConfig } from '@core/utils/validation/validators';
import { Field } from 'formik';
import { prepareInput } from '@components/form/inputs/FormField';
import InputField from '@components/form/fields/InputField';
import INPUTS from '@components/constants/inputs';

export const INPUT_CONFIG: InputConfig = {
  isRequired: true,
  isEmail: true,
};

//prettier-ignore
export const EmailInputComponent = ({ renderProp, ...props }: any) => (
  <Field name={INPUTS.EMAIL}
         component={InputField}
         label={props.t('LABEL.EMAIL')}
         maxLength={100}
         {...props} />
);

const EmailInput = (options: InputConfig) => prepareInput(INPUT_CONFIG, options, EmailInputComponent);

export default EmailInput;
