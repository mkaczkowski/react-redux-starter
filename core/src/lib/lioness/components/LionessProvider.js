import React, { Component } from 'react';

import getGettextInstance from '../getGettextInstance.js';
import { emit } from '../pubsub.js';
import { t, tcnp } from '../translators.js';

/**
 * Localization context provider
 */
class LionessProvider extends Component {
  static defaultProps = {
    transformInput: x => x,
    debug: true,
  };

  // Child context types
  static childContextTypes = {
    t: () => {},
    tcnp: () => {},
    locale: () => {},
    transformInput: () => {},
  };

  constructor(props) {
    super(props);

    const options = props.debug === null ? {} : { debug: props.debug };
    this.gt = getGettextInstance(props.messages, props.locale, options);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      emit();
    }
    if (prevProps.messages !== this.props.messages) {
      emit();
    }
  }

  /**
   * Translator functions are curried, so we return a set of functions
   * which all have been given a translation function.
   */
  getChildContext() {
    return {
      locale: this.props.locale,
      t: t(this.gt.gettext.bind(this.gt)),
      tcnp: tcnp(this.gt.npgettext.bind(this.gt)),
      transformInput: this.props.transformInput,
    };
  }

  /**
   * Set the locale when receiving new props
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.locale !== this.props.locale && nextProps.messages !== this.props.messages) {
      this.gt.addTranslations(nextProps.locale, 'messages', nextProps.messages[nextProps.locale]);
      this.gt.setLocale(nextProps.locale);
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default LionessProvider;
