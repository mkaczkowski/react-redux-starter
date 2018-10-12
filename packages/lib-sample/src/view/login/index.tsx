
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { actions as authActions } from 'lib-core/src/reducers/auth';
import { toJS } from 'lib-core/src/utils/immutable/toJS';
import injectSaga from 'lib-core/src/store/utils/injectSaga';
import saga from 'lib-core/src/sagas/login';
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
