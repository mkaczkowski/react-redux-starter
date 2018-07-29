//@flow
import * as React from 'react';
import { Formik } from 'formik';
import { validation } from '@core/utils/validation/validators';
import { onSubmitHandler } from '@core/utils/form/submit';
import { ERROR_CODES } from '@core/constants/errorCodes';
import INPUTS from '@components/constants/inputs';
import CONFIG from '@core/config';

type Validator = (value: string) => string | Array<(value: string) => string>;

type InputType = {
  [key: string]: {
    validators: Validator,
    value: string,
  },
};

export type FormifyProps = {
  t: (value: any) => string,
  children: any,
  initialValues?: Object,
  inputs: InputType,
  onCall: (value: Object) => any,
};

const onFormSubmit = (props: any, inputs: InputType) => e => {
  e.preventDefault();
  props.handleSubmit(e);
  setTimeout(() => {
    const touched = {};
    Object.keys(inputs).forEach(inputName => (touched[inputName] = true));
    props.setTouched(touched);
  }, 0);
};

function getValidators(inputs: InputType): { [key: string]: Validator } {
  const validators = {};
  Object.keys(inputs).forEach(inputName => {
    validators[inputName] = inputs[inputName].validators;
  });
  return validators;
}

function getInitialValues(inputs: InputType): { [key: string]: Validator } {
  const initialValues = {};
  Object.keys(inputs).forEach(inputName => {
    initialValues[inputName] = inputs[inputName].value;
  });
  return initialValues;
}

const FormikWrapper = ({ t, children, onCall, inputs, ...other }: FormifyProps) => {
  // console.table(inputs)
  return (
    <Formik
      {...other}
      validateOnBlur={false}
      validateOnChange={true}
      initialValues={getInitialValues(inputs)}
      validate={values => (CONFIG.formValidation ? validation(values, getValidators(inputs)) : {})}
      onSubmit={(values, { setSubmitting, setFieldError, resetForm /* setValues and other goodies */ }) => {
        const successCallback = () => setSubmitting(false);
        const errorCallback = ({ error = ERROR_CODES.API.UNEXPECTED_ERROR, newValues }) => {
          setSubmitting(false);
          newValues && resetForm({ ...values, ...newValues });
          setFieldError(INPUTS.GLOBAL, error);
        };
        setSubmitting(true);
        return onSubmitHandler(values, successCallback, errorCallback, onCall);
      }}
      render={({ onSubmit, ...restProps }) => {
        return children({
          t,
          formInputs: inputs,
          ...other,
          ...restProps,
          onFormSubmit: onFormSubmit(restProps, inputs),
        });
      }}
    />
  );
};

const Formify = (props: any) => (
  <FormikWrapper {...props}>
    {(innerProps: any) => {
      const { children } = props;
      const { t, formInputs } = innerProps;
      const inputProps = { t, inputs: formInputs };
      return children ? children({ ...innerProps, inputProps }) : null;
    }}
  </FormikWrapper>
);

export default Formify;
