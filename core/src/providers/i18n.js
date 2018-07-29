// @flow
import * as React from 'react';
import type { ILogger } from '@core/modules/logger';
import Logger from '@core/modules/logger';
import { LionessProvider } from '@core/lib/lioness';
import { setupTranslations } from '@core/utils/i18n';

export type I18nProviderProps = {
  children: any,
  language: string,
};

export type I18nProviderState = {
  language: string,
  messages: any,
};

export type I18nContextProps = {
  language: string,
  changeLanguage: (language: string) => Promise<any>,
};

export const I18nContext = React.createContext();

class I18nProvider extends React.PureComponent<I18nProviderProps, I18nProviderState> {
  logger: ILogger = Logger.getInstance('I18nProvider');

  state = {
    messages: window.translations,
    language: document.documentElement ? document.documentElement.lang : this.props.language,
  };

  changeLanguage = async (language: string) => {
    this.logger.debug('changeLanguage:', language);
    const messages = await setupTranslations([language]);
    this.setState({ messages, language });
    return true;
  };

  render() {
    const { messages, language } = this.state;

    const value: I18nContextProps = {
      language: this.state.language,
      changeLanguage: this.changeLanguage,
    };

    return (
      <I18nContext.Provider value={value}>
        <LionessProvider messages={messages} locale={language}>
          {this.props.children}
        </LionessProvider>
      </I18nContext.Provider>
    );
  }
}

export default I18nProvider;
