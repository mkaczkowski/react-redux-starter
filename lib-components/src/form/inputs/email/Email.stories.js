
import React from 'react';
import FormField from 'lib-components/src/form/inputs/FormField';
import { host } from 'storybook-host';
import { storiesOf } from '@storybook/react';
import { t } from 'lib-core/src/utils/i18n/translate';
import Inputs from 'lib-components/src/constants/inputs';
import DisplayFormikState from 'lib-components/src/form/helpers/DisplayFormikState';
import Formify from 'lib-core/src/utils/ui/formify';
import EmailInput from 'lib-components/src/form/inputs/email/Email';
import { ERROR_CODES } from 'lib-core/src/constants/errorCodes';

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
