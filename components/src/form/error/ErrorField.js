import * as React from 'react';
import { ERROR_MESSAGES } from '@core/constants/errorCodes';

const ErrorField = ({ t, theme, touched, error }) =>
  touched && error ? <span className={'errorField'}>{t(ERROR_MESSAGES[error])}</span> : null;

export default ErrorField;
