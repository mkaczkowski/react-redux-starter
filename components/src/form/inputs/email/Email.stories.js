//@flow
import React from 'react';
import FormField from '@components/form/inputs/FormField';
import { host } from 'storybook-host';
import { storiesOf } from '@storybook/react';
import { t } from '@core/utils/i18n/translate';
import INPUTS from '@components/constants/inputs';
import DisplayFormikState from '@components/form/helpers/DisplayFormikState';
import Formify from '@core/utils/ui/formify';
import EmailInput from '@components/form/inputs/email/Email';
import { ERROR_CODES } from '@core/constants/errorCodes';

const props = {
  t,
  inputs: {
    [INPUTS.EMAIL]: EmailInput({
      isRequired: ERROR_CODES.EMAIL_IS_REQUIRED,
    }),
  },
};

//prettier-ignore
storiesOf('Form|Inputs/EmailField', module)
  .addDecorator(host({ align: 'center top' }))
  .add('basic', () => (
      <Formify {...props}>
        {({ onFormSubmit, inputProps, ...formifyProps }: any) => (
          <form onSubmit={onFormSubmit}>
            <FormField name={INPUTS.EMAIL} label={"Your email"} {...inputProps} />
            <DisplayFormikState {...formifyProps} debug={true} />
          </form>
        )}
      </Formify>
    )
  );
