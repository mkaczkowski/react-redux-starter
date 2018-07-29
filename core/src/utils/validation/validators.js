// @flow
import { ERROR_CODES } from '@core/constants/errorCodes';

export type ErrorCodeType = string | boolean;

export type InputConfig = {|
  value?: any,
  isRequired?: ErrorCodeType,
  isEmail?: ErrorCodeType,
  isCCN?: ErrorCodeType,
  hasMinChars?: ErrorCodeType,
|};

export function validation(values: Object, validators: Array<any>) {
  let errors = {};
  validators &&
    Object.entries(validators).forEach((entry: any) => {
      const field = entry[0];
      const validateFn = Array.isArray(entry[1]) ? multi(entry[1]) : entry[1];
      const result = validateFn && validateFn(values[field]);
      if (result) {
        errors[field] = result;
      }
    });
  return errors;
}

export const multi = (validators: Array<any>) => (value: any) => {
  const invalidValidator = validators.find(validator => validator(value));
  return invalidValidator ? invalidValidator(value) : undefined;
};

export const getValidators = (config: InputConfig | any) => {
  const validators = [];
  if (config.isRequired) validators.push(required(config.isRequired));
  if (config.isEmail) validators.push(email(config.isEmail));
  if (config.hasMinChars) validators.push(tooShort(config.hasMinChars));
  return validators;
};

/*****************
 * COMMON
 */

const getErrorCode = (errorCode, defaultErrorCode) => (errorCode && errorCode !== true ? errorCode : defaultErrorCode);

export const required = (errorCode?: ErrorCodeType) => (value: any) =>
  !value ? getErrorCode(errorCode, ERROR_CODES.REQUIRED) : undefined;

export const email = (errorCode?: ErrorCodeType) => (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? getErrorCode(errorCode, ERROR_CODES.EMAIL_IS_INVALID)
    : undefined;

export const number = (errorCode?: ErrorCodeType) => (value: any) =>
  value && isNaN(Number(value)) ? getErrorCode(errorCode, ERROR_CODES.MUST_BE_A_NUMBER) : undefined;

export const tooShort = (errorCode?: ErrorCodeType, length: number = 4) => (value: any) =>
  value && value.length < length ? getErrorCode(errorCode, ERROR_CODES.TOO_SHORT) : undefined;

export const password_confirmation = (errorCode?: ErrorCodeType) => (value: any, allValues: any) =>
  allValues.password_confirmation !== allValues.PASSWORD
    ? getErrorCode(errorCode, ERROR_CODES.PASSWORDS_NOT_MATCH)
    : undefined;
