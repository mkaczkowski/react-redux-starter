import * as React from 'react';
import { ERROR_MESSAGES } from '@core/constants/errorCodes';
import { Field } from 'formik';
import INPUTS from '@components/constants/inputs';

const GlobalErrorField = ({ t, className, name = INPUTS.GLOBAL }) => (
  <Field name={name}>
    {props =>
      props.form.errors[name] ? <span className={className}>{t(ERROR_MESSAGES[props.form.errors[name]])}</span> : null
    }
  </Field>
);

export default GlobalErrorField;
