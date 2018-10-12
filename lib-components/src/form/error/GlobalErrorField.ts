import * as React from 'react';
import { ERROR_MESSAGES } from 'lib-core/src/constants/errorCodes';
import { Field } from 'formik';
import INPUTS from 'lib-components/srcconstants/inputs';

const GlobalErrorField = ({ t, className, name = INPUTS.GLOBAL }) => (
  <Field name={name}>
    {props =>
      props.form.errors[name] ? <span className={className}>{ERROR_MESSAGES[props.form.errors[name]]}</span> : null
    }
  </Field>
);

export default GlobalErrorField;
