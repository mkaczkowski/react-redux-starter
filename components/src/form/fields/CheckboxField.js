//@flow

import * as React from 'react';
import type { FieldProps } from 'formik';
import ErrorField from '@components/form/error/ErrorField';
import Checkbox from '@components/common/checkbox/Checkbox';

export const CheckboxField: React.SFC<FieldProps<any>> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <Checkbox
      {...field}
      {...props}
      checked={field.value}
      onChange={value => setFieldValue(field.name, value)}
      onBlur={() => setFieldTouched(field.name, true)}
      error={errors[field.name]}
      touched={touched[field.name]}
      renderError={({ t, theme, touched, error }) => <ErrorField t={t} theme={theme} touched={touched} error={error} />}
    />
  </div>
);
