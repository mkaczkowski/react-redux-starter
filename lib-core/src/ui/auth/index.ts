import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { actions as authActions, selectors as authSelectors } from 'lib-core/src/reducers/auth';
// import injectSaga from 'core/src/store/utils/injectSaga';
// import saga from 'core/src/sagas/auth';
import { createStructuredSelector } from 'reselect';
import { toJS } from 'lib-core/src/utils/immutable/toJS';
import Auth from './Auth';

const mapStateToProps = createStructuredSelector({
  isLoading: authSelectors.isLoading(),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      authAction: authActions.authAction,
    },
    dispatch
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

// const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  // withSaga,
  withConnect
)(toJS(Auth));
