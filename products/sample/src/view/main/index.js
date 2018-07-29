// @flow
import { withTranslators } from '@core/lib/lioness';
import { compose } from 'redux';
import Main from './Main';

const enhance = compose(withTranslators);

export default enhance(Main);
