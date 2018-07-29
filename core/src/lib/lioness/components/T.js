import * as React from 'react';
import withTranslators from '../withTranslators.js';

class T extends React.Component {
  static defaultProps = {
    message: null,
    children: null,
    messagePlural: null,
    context: '',
    count: 1,
  };

  render() {
    const { message, messagePlural, context, count, children, tcnp, transformInput, className, ...scope } = this.props;

    delete scope.t;
    delete scope.tc;

    const msgid = message || children || '';

    const translatedContent = tcnp(context, transformInput(msgid), transformInput(messagePlural), count, {
      ...scope,
      count,
    });

    return typeof translatedContent === 'string' ? (
      <span className={className}>{translatedContent}</span>
    ) : (
      translatedContent
    );
  }
}

export default withTranslators(T);
