
import * as React from 'react';
import Button from 'lib-components/src/common/button/Button';
import LoginForm from 'lib-components/src/form/login/LoginForm';
import Logger from 'lib-core/src/modules/logger';
// import Inputs from 'lib-components/src/constants/inputs';

// export type LoginProps = {
//   t: TranslateType,
//   isSubmitting?: boolean,
//   actions: {
//     login: ActionType,
//   },
// };

const LoginExtension = ({ isSubmitting }) => (
  <React.Fragment>
    <div>
      <Button type="submit" info loading={isSubmitting} disabled={isSubmitting}>
        BUTTON.LOGIN
      </Button>
    </div>
    <div className="terms">
      <a href={`/terms`}>FIELD.TERMS_OF_USE.LABEL</a>
    </div>
  </React.Fragment>
);

class Login extends React.Component {
  logger = Logger.getInstance('Login');

  // onCall = (payload: FormPayload) => {
  onCall = (payload) => {
    this.props.actions.login(this.prepareFieldsToReset(payload));
  };

  // prepareFieldsToReset = (payload: FormPayload) => ({
  prepareFieldsToReset = (payload) => ({
    ...payload,
    onError: ({ error }) =>
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
        <h2 className="heading">REGISTER.EMAIL.HEADING</h2>
        <div className="form">
          <h2 className="title">REGISTER.EMAIL.FORM.TITLE</h2>
          <h3 className="description">REGISTER.EMAIL.FORM.DESCRIPTION</h3>
          <LoginForm {...this.props} onCall={this.onCall} render={LoginExtension} />
        </div>
      </div>
    );
  }
}

export default Login;
