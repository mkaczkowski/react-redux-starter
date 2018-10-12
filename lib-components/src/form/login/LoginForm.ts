
import * as React from 'react';
import { ERROR_CODES } from 'lib-core/src/constants/errorCodes';
import FormField from 'lib-components/src/form/inputs/FormField';
import PasswordInput from 'lib-components/src/form/inputs/password/Password';
import RememberMeInput from 'lib-components/src/form/inputs/rememberMe/RememberMe';
import EmailInput from 'lib-components/src/form/inputs/email/Email';
import Formify from 'lib-core/src/utils/ui/formify';
import Button from 'lib-components/src/common/button/Button';
import DisplayFormikState from 'lib-components/src/form/helpers/DisplayFormikState';
import INPUTS from 'lib-components/src/constants/inputs';
import GlobalErrorField from 'lib-components/src/form/error/GlobalErrorField';
import './LoginForm.scss';

export const inputs = {
  [INPUTS.EMAIL]: EmailInput({
    isRequired: ERROR_CODES.EMAIL_IS_REQUIRED,
  }),
  [INPUTS.PASSWORD]: PasswordInput({
    isRequired: ERROR_CODES.PASSWORD_IS_REQUIRED,
    hasMinChars: ERROR_CODES.PASSWORD_TOO_SHORT,
  }),
  [INPUTS.REMEMBER_ME]: RememberMeInput({}),
};

const LoginForm = ({ render, ...props }) => (
  <Formify inputs={inputs} {...props}>
    {({ onFormSubmit, inputProps, ...formifyProps }) => (
      <form onSubmit={onFormSubmit}>
        <FormField name={INPUTS.EMAIL} {...inputProps} />
        <FormField name={INPUTS.PASSWORD} {...inputProps} />
        <FormField name={INPUTS.REMEMBER_ME} {...inputProps} />
        {render ? (
          render({ ...formifyProps })
        ) : (
          <div className="login-actions">
            <Button type="submit" primary loading={formifyProps.isSubmitting} disabled={formifyProps.isSubmitting}>
              BUTTON.LOGIN
            </Button>
          </div>
        )}
        <DisplayFormikState {...formifyProps} />
        <GlobalErrorField {...formifyProps} className="invalid" />
      </form>
    )}
  </Formify>
);

export default LoginForm;
