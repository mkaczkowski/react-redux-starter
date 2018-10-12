
import { withTranslators } from 'core/src/lib/lioness';
import { compose } from 'redux';
import Main from './Main';

const enhance = compose(withTranslators);

export default enhance(Main);
