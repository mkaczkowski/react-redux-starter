// @flow
import Logger from '@core/modules/logger';
import axios from 'axios';
import type { ILogger } from '@core/modules/logger';

const logger: ILogger = Logger.getInstance('AuthApi');

if (process.env.NODE_ENV === 'development') {
  axios.interceptors.request.use(
    function(request) {
      logger.debug({ [`[${request.method.toUpperCase()}] ${request.url}`]: { data: request.data } });
      return request;
    },
    function(error) {
      logger.debug({ error });
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function(response) {
      logger.debug({
        [`[${response.status}] ${response.config.url}`]: { data: response.data, status: response.status },
      });
      return response;
    },
    function(error) {
      logger.debug({ error });
      return Promise.reject(error);
    }
  );
}

// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'},
// auth: {
//   username: 'janedoe',
//     password: 's00pers3cret'
// },
// });

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// transformRequest: [(data) => JSON.stringify(data.data)],
//   headers: {
//   'Accept': 'application/json',
//     'Content-Type': 'application/json',
// }

// axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;
