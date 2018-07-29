// @flow
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { selectors as authSelectors } from '@core/reducers/auth';
import { createStructuredSelector } from 'reselect';
import { toJS } from '@core/utils/immutable/toJS';

const mapStateToProps = createStructuredSelector({
  user: authSelectors.getUser().toJS ? authSelectors.getUser().toJS() : authSelectors.getUser(),
});

const withConnect = connect(mapStateToProps, null);

export default withConnect(toJS(PrivateRoute));
