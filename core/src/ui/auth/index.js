// @flow
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Auth from './Auth';
import injectSaga from '@core/store/utils/injectSaga';
import { actions as authActions, selectors as authSelectors } from '@core/reducers/auth';
import saga from '@core/sagas/auth';
import { createStructuredSelector } from 'reselect';
import { toJS } from '@core/utils/immutable/toJS';

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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'auth', saga });

export default compose(withSaga, withConnect)(toJS(Auth));
