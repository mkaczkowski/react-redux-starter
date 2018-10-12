
import * as React from 'react';
// import type { FieldProps } from 'formik';
// import type { InputProps } from 'components/srccommon/input/Input';
import Input from 'lib-components/src/common/input/Input';
import ErrorField from 'lib-components/src/form/error/ErrorField';

const InputField: React.SFC<FieldProps<any> & InputProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <Input
    {...field}
    {...props}
    error={errors[field.name]}
    touched={touched[field.name]}
    setFieldValue={setFieldValue}
    setFieldTouched={setFieldTouched}
    renderError={({ t, theme, touched, error }) => <ErrorField t={t} theme={theme} touched={touched} error={error} />}
  />
);

export default InputField;
