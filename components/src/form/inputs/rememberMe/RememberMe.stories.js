//@flow
import React from 'react';
import RememberMeInput from './RememberMe';
import { INPUTS } from '@core/constants/inputs';
import Formify from '@core/utils/ui/formify';
import DisplayFormikState from '@components/helpers/DisplayFormikState';
import FormField from '@components/form/inputs/FormField';
import { host } from 'storybook-host';
import { storiesOf } from '@storybook/react';
import _pick from 'lodash/pick';
import { t } from '@core/utils/i18n/translate';
import { LABELS } from '@core/constants/labels';

const props = {
  t,
  inputs: {
    [INPUTS.RememberMe]: RememberMeInput({
      isRequired: true,
    }),
  },
};

const storyBook = {
  default: (
    <Formify {...props}>
      {({ onFormSubmit, inputProps, ...formifyProps }: any) => (
        <form onSubmit={onFormSubmit}>
          <FormField name={INPUTS.RememberMe} label={t(LABELS.fields.rememberMe.label)} {...inputProps} />
          <DisplayFormikState {...formifyProps} debug={true} />
        </form>
      )}
    </Formify>
  ),
};

const stories = storiesOf(`Form|Input/rememberMe`, module);
stories.addDecorator(host({ align: 'center top' }));

Object.keys(storyBook).forEach(storyKey => stories.add(storyKey, () => storyBook[storyKey]));

export default _pick(storyBook, ['default']);
