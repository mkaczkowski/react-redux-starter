/* eslint-disable no-console */
// @flow
/*
 * Logger Util
 *
 * init:
 * import Logger from './utils/logger'
 * Logger.init(env)
 *
 * usage:
 * var Logger = require('js-logger');
 * var logger = jsLogger.get('named-logger');
 * logger.info("123")
 *
 * time metrcis:
 * logger.time();
 * ...
 * logger.timeEnd();
 *
 */
import CONFIG from '@core/config';

const jsLogger = require('js-logger');

export interface ILogger {
  debug: Function;
  info: Function;
  warn: Function;
  error: Function;
  apiLog: Function;
  context: any;
}

export type LogConfig = {
  browser: boolean,
  api: boolean,
};

export class Logger {
  config: LogConfig;

  run = () => {
    this.config = CONFIG.logs;
    this.initDefaultLogs();
  };

  getInstance = (name: string): ILogger => {
    const instance = jsLogger.get(name);
    // instance.apiLog = this.apiLog;
    return instance;
  };

  initDefaultLogs = () => {
    const logLevel = this.config.browser ? jsLogger.DEBUG : jsLogger.INFO;
    jsLogger.useDefaults({
      formatter: function(messages, context) {
        messages.unshift(`${context.name} -`);
        messages.unshift(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, `[$1]`));
      },
    });
    jsLogger.setLevel(logLevel);
    if (this.config.browser) {
      displayDetails();
    }
  };

  apiLog = ({ startDate, url, options, response, data }: any) => {
    if (!this.config || !this.config.api) return;
    console.groupCollapsed(
      `[${response.status} ${options.method || 'GET'}] ${url} - ${new Date().getTime() - startDate.getTime()}ms`
    );
    console.log('[Request]', options);
    console.log('[Response]', response);
    if (data) console.log('[Data]', data);
    console.groupEnd();
  };
}

function displayDetails() {
  console.info(`[${CONFIG.productName}]`);
  console.info(`[v:${CONFIG.version}]`);
  console.info(`[env:${CONFIG.environment}]`);
}

window.v = displayDetails;

export default new Logger();
