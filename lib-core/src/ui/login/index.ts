import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { actions as loginActions, selectors as loginSelectors } from '../../reducers/login';
import { toJS } from '../../utils/immutable/toJS';
import Login from './Login';
// import injectSaga from 'core/src/store/utils/injectSaga';
// import saga from 'core/src/sagas/login';

const mapStateToProps = createStructuredSelector({
  isLoading: loginSelectors.isLoading(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(
    {
      loginAction: loginActions.loginAction,
    },
    dispatch
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

// const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  // withSaga,
  withConnect
)(toJS(Login));
