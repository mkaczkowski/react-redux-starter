
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { selectors as authSelectors } from 'lib-core/src/reducers/auth';
import { createStructuredSelector } from 'reselect';
import { toJS } from 'lib-core/src/utils/immutable/toJS';

const mapStateToProps = createStructuredSelector({
  user: authSelectors.getUser().toJS ? authSelectors.getUser().toJS() : authSelectors.getUser(),
});

const withConnect = connect(mapStateToProps, null);

export default withConnect(toJS(PrivateRoute));
