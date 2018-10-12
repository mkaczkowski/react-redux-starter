
import React from 'react';
import PasswordWithReveal from './PasswordWithReveal';
import Formify from 'lib-core/src/utils/ui/formify';
import FormField from 'lib-components/src/form/inputs/FormField';
import { host } from 'storybook-host';
import { storiesOf } from '@storybook/react';
import { t } from 'lib-core/src/utils/i18n/translate';
import Inputs from 'lib-components/src/constants/inputs';
import DisplayFormikState from 'lib-components/src/form/helpers/DisplayFormikState';

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
