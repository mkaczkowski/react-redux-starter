import _get from 'lodash/get';

/**
 * Creates and returns a new Gettext instance.
 *
 * @constructor
 * @param  {Object}  [options]        A set of options
 * @param  {Boolean} options.debug  Whether to output debug info into the
 *                                  console.
 * @return {Object}  A Gettext instance
 */
class Gettext {
  constructor() {
    this.catalogs = {};
    this.locale = '';
    this.domain = 'messages';
    this.listeners = [];
  }

  /**
   * Adds an event listener.
   *
   * @param  {String}   eventName  An event name
   * @param  {Function} callback   An event handler function
   */
  on(eventName, callback) {
    this.listeners.push({
      eventName: eventName,
      callback: callback,
    });
  }

  /**
   * Removes an event listener.
   *
   * @param  {String}   eventName  An event name
   * @param  {Function} callback   A previously registered event handler function
   */
  off(eventName, callback) {
    this.listeners = this.listeners.filter(function(listener) {
      return (listener.eventName === eventName && listener.callback === callback) === false;
    });
  }

  /**
   * Emits an event to all registered event listener.
   *
   * @private
   * @param  {String} eventName  An event name
   * @param  {any}    eventData  Data to pass to event listeners
   */
  emit(eventName, eventData) {
    for (var i = 0; i < this.listeners.length; i++) {
      var listener = this.listeners[i];
      if (listener.eventName === eventName) {
        listener.callback(eventData);
      }
    }
  }

  /**
   * Logs a warning to the console if debug mode is enabled.
   *
   * @ignore
   * @param  {String} message  A warning message
   */
  warn(message) {
    this.emit('error', message);
  }

  /**
   * Stores a set of translations in the set of gettext
   * catalogs.
   *
   * @example
   *     gt.addTranslations('sv-SE', 'messages', translationsObject)
   *
   * @param {String} locale        A locale string
   * @param {String} domain        A domain name
   * @param {Object} translations  An object of gettext-parser JSON shape
   */
  addTranslations(locale, domain, translations) {
    if (!this.catalogs[locale]) {
      this.catalogs[locale] = {};
    }

    this.catalogs[locale][domain] = translations;
  }

  /**
   * Sets the locale to get translated messages for.
   *
   * @example
   *     gt.setLocale('sv-SE')
   *
   * @param {String} locale  A locale
   */
  setLocale(locale) {
    if (typeof locale !== 'string') {
      this.warn('You called setLocale() with an argument of type ' + typeof locale + '. The locale must be a string.');
      return;
    }

    if (locale.trim() === '') {
      this.warn('You called setLocale() with an empty value, which makes little sense.');
    }

    if (!this.catalogs[locale]) {
      this.warn('You called setLocale() with "' + locale + '", but no translations for that locale has been added.');
    }

    this.locale = locale;
  }

  /**
   * Translates a string using the default textdomain
   *
   * @example
   *     gt.gettext('Some text')
   *
   * @param  {String} msgid  String to be translated
   * @return {String} Translation or the original string if no translation was found
   */
  gettext(msgid) {
    return this.dnpgettext(this.domain, '', msgid);
  }

  /**
   * Translates a plural string from a specific context using the default textdomain
   *
   * @example
   *     gt.npgettext('sports', 'Back', '%d backs', numberOfBacks)
   *
   * @param  {String} msgctxt      Translation context
   * @param  {String} msgid        String to be translated when count is not plural
   * @param  {String} msgidPlural  String to be translated when count is plural
   * @param  {Number} count        Number count for the plural
   * @return {String} Translation or the original string if no translation was found
   */
  npgettext(msgctxt, msgid) {
    return this.dnpgettext(this.domain, msgctxt, msgid);
  }

  /**
   * Translates a plural string from a specifi context using a specific textdomain
   *
   * @example
   *     gt.dnpgettext('domainname', 'sports', 'Back', '%d backs', numberOfBacks)
   *
   * @param  {String} domain       A gettext domain name
   * @param  {String} msgctxt      Translation context
   * @param  {String} msgid        String to be translated
   * @param  {String} msgidPlural  If no translation was found, return this on count!=1
   * @param  {Number} count        Number count for the plural
   * @return {String} Translation or the original string if no translation was found
   */
  dnpgettext(domain, msgctxt, msgid) {
    var defaultTranslation = msgid;
    var translation;

    msgctxt = msgctxt || '';

    translation = this._getTranslation(domain, msgctxt, msgid);

    if (translation) {
      return translation.msgstr[0] || defaultTranslation;
    } else {
      this.warn(
        'No translation was found for msgid "' + msgid + '" in msgctxt "' + msgctxt + '" and domain "' + domain + '"'
      );
    }

    return defaultTranslation;
  }
  /**
   * Retrieves translation object from the domain and context
   *
   * @private
   * @param  {String} domain   A gettext domain name
   * @param  {String} msgctxt  Translation context
   * @param  {String} msgid    String to be translated
   * @return {Object} Translation object or false if not found
   */
  _getTranslation(domain, msgctxt, msgid) {
    msgctxt = msgctxt || '';

    return _get(this.catalogs, [this.locale, domain, 'translations', msgctxt, msgid]);
  }
}

export default Gettext;
