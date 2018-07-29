//@flow
import { replacePlaceholders } from '@core/utils/metadata';
import { getCurrentYear } from '@core/utils/date/date';

const ENV = process.env.APP_ENV;
export const __TEST__ = ENV === 'test';
export const __DEV__ = ENV === 'development';
export const __STAGING__ = ENV === 'staging';
export const __PRODUCTION__ = ENV === 'production';

type ConfigType = {|
  version: any,
  productName: any,
  title: any,
  description: any,
  copyright: any,
  environment: any,
  productUrl: any,
  urls: {
    terms: any,
  },
  api: {
    apiUrl: any,
    authUser: any,
    authPassword: any,
    userLogin: any,
    userPassword: any,
  },
  formValidation: boolean,
  logs: {
    browser: boolean,
    api: boolean,
  },
|};

const CONFIG: ConfigType = {
  environment: ENV,
  productName: process.env.PRODUCT_NAME,
  version: process.env.PRODUCT_VERSION,
  title: process.env.PRODUCT_TITLE,
  description: process.env.PRODUCT_DESCRIPTION,
  copyright: replacePlaceholders(process.env.PRODUCT_COPYRIGHT, {
    title: process.env.PRODUCT_TITLE,
    year: getCurrentYear(true),
  }),
  productUrl: process.env.PRODUCT_URL,
  urls: {
    terms: process.env.TERMS_URL,
  },
  api: {
    apiUrl: process.env.API_URL,
    authUser: process.env.AUTH_USER,
    authPassword: process.env.AUTH_PASSWORD,
    userLogin: process.env.USER_LOGIN,
    userPassword: process.env.USER_PASSWORD,
  },
  formValidation: process.env.DISABLE_FORM_VALIDATION !== 'true',
  logs: {
    browser: !__PRODUCTION__ || __TEST__,
    api: !__PRODUCTION__ || __TEST__,
  },
};

export default CONFIG;
