// @flow
import * as React from 'react';
import { Field } from 'formik';
import { prepareInput } from '@components/form/inputs/FormField';
import type { InputConfig } from '@core/utils/validation/validators';
import INPUTS from '@components/constants/inputs';
import { CheckboxField } from '@components/form/fields/CheckboxField';

export const INPUT_CONFIG: InputConfig = {
  isRequired: false,
};

export const RememberMeInputComponent = ({ renderProp, ...props }: any) => {
  return <Field name={INPUTS.REMEMBER_ME} component={CheckboxField} {...props} />;
};

const RememberMeInput = (options: InputConfig) => prepareInput(INPUT_CONFIG, options, RememberMeInputComponent);

export default RememberMeInput;
