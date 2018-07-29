// @flow
import * as React from 'react';
import Button from '@components/common/button/Button';
import type { ActionType, TranslateType } from '@core/constants/flowTypes';
import LoginForm from '@components/form/login/LoginForm';
import Logger from '@core/modules/logger';
import type { FormPayload } from '@core/constants/flowTypes';
import INPUTS from '@components/constants/inputs';

export type LoginProps = {
  t: TranslateType,
  isSubmitting?: boolean,
  actions: {
    login: ActionType,
  },
};

const LoginExtension = ({ t, isSubmitting }: LoginProps) => (
  <React.Fragment>
    <div>
      <Button type="submit" info loading={isSubmitting} disabled={isSubmitting}>
        {t('BUTTON.LOGIN')}
      </Button>
    </div>
    <div className="terms">
      <a href={`/terms`}>{t('FIELD.TERMS_OF_USE.LABEL')}</a>
    </div>
  </React.Fragment>
);

class Login extends React.Component<LoginProps> {
  logger = Logger.getInstance('Login');

  onCall = (payload: FormPayload) => {
    this.props.actions.login(this.prepareFieldsToReset(payload));
  };

  prepareFieldsToReset = (payload: FormPayload) => ({
    ...payload,
    onError: ({ error }: any) =>
      payload.onError({
        error,
        newValues: {
          [INPUTS.PASSWORD]: '',
        },
      }),
  });

  render() {
    const { t } = this.props;
    return (
      <div className="step">
        <h2 className="heading">{t('REGISTER.EMAIL.HEADING')}</h2>
        <div className="form">
          <h2 className="title">{t('REGISTER.EMAIL.FORM.TITLE')}</h2>
          <h3 className="description">{t('REGISTER.EMAIL.FORM.DESCRIPTION')}</h3>
          <LoginForm {...this.props} onCall={this.onCall} render={LoginExtension} />
        </div>
      </div>
    );
  }
}

export default Login;
