
import * as React from 'react';
import { Field } from 'formik';
import { prepareInput } from 'lib-components/src/form/inputs/FormField';
// import type { InputConfig } from 'lib-core/src/utils/validation/validators';
import Inputs from 'lib-components/src/constants/inputs';
import { CheckboxField } from 'lib-components/src/form/fields/CheckboxField';

export const INPUT_CONFIG: InputConfig = {
  isRequired: false,
};

export const RememberMeInputComponent = ({ renderProp, ...props }: any) => {
  return <Field name={INPUTS.REMEMBER_ME} component={CheckboxField} {...props} />;
};

const RememberMeInput = (options: InputConfig) => prepareInput(INPUT_CONFIG, options, RememberMeInputComponent);

export default RememberMeInput;
