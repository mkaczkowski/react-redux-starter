
import { withTranslators } from 'core/src/lib/lioness';
import { compose } from 'redux';
import Hero from './Hero';

const enhance = compose(withTranslators);

export default enhance(Hero);
