import * as React from 'react';
import { ERROR_MESSAGES } from '@core/constants/errorCodes';

const ErrorField = ({ theme, touched, error }) =>
  touched && error ? <span className={'errorField'}>ERROR_MESSAGES[error]</span> : null;

export default ErrorField;
