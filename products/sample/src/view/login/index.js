
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { actions as authActions } from '@core/reducers/auth';
import { toJS } from '@core/utils/immutable/toJS';
import injectSaga from '@core/store/utils/injectSaga';
import saga from '@core/sagas/login';
import Login from './Login';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      login: authActions.loginAction,
    },
    dispatch
  ),
});

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'login', saga });

export default compose(withSaga, withConnect)(toJS(Login));
