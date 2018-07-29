//@flow
import React from 'react';
import PasswordWithReveal from './PasswordWithReveal';
import Formify from '@core/utils/ui/formify';
import FormField from '@components/form/inputs/FormField';
import { host } from 'storybook-host';
import { storiesOf } from '@storybook/react';
import { t } from '@core/utils/i18n/translate';
import INPUTS from '@components/constants/inputs';
import DisplayFormikState from '@components/form/helpers/DisplayFormikState';

const props = {
  t,
  inputs: {
    [INPUTS.PASSWORD]: PasswordWithReveal({
      isRequired: true,
    }),
  },
};

//prettier-ignore
storiesOf('Form|Inputs/PasswordField', module)
  .addDecorator(host({ align: 'center top' }))
  .add('reveal', () => (
      <Formify {...props}>
        {({ onFormSubmit, inputProps, ...formifyProps }: any) => (
          <form onSubmit={onFormSubmit}>
            <FormField name={INPUTS.PASSWORD} label={"Your password"} {...inputProps} />
            <DisplayFormikState {...formifyProps} debug={true} />
          </form>
        )}
      </Formify>
    )
  );
