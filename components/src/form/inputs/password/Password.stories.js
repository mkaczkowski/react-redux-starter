//@flow
import React from 'react';
import Password from './Password';
import FormField from '@components/form/inputs/FormField';
import { host } from 'storybook-host';
import { storiesOf } from '@storybook/react';
import { t } from '@core/utils/i18n/translate';
import INPUTS from '@components/constants/inputs';
import DisplayFormikState from '@components/form/helpers/DisplayFormikState';
import Formify from '@core/utils/ui/formify';

const props = {
  t,
  inputs: {
    [INPUTS.PASSWORD]: Password({
      isRequired: true,
    }),
  },
};

//prettier-ignore
storiesOf('Form|Inputs/PasswordField', module)
  .addDecorator(host({ align: 'center top' }))
  .add('basic', () => (
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
