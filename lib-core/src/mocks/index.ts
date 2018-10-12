import CONFIG from 'lib-core/src/config';
import { delay } from 'lib-core/src/utils/async';
import { POST } from 'lib-core/src/constants/rest';

/**
 * STATUS CHECKER
 */
export const checkStatus_200 = {
  name: 'Check Status [200]',
  url: `${CONFIG.api.checkStatus}`,
  method: POST,
  response: () =>
    delay(0).then(() => {
      return require('./response/check/check.post.200');
    }),
};

export const checkStatus_wait_200 = {
  name: 'Check Status (wait) [200]',
  url: `${CONFIG.api.checkStatus}`,
  method: POST,
  response: () =>
    delay(0).then(() => {
      return require('./response/check/check_wait.post.200');
    }),
};

export const checkStatus_offer_200 = {
  name: 'Check Status (wait) [200]',
  url: `${CONFIG.api.checkStatus}`,
  method: POST,
  response: () =>
    delay(0).then(() => {
      return require('./response/check/check_offer.post.200');
    }),
};

export const checkStatus_500 = {
  name: 'Check Status [500]',
  url: `${CONFIG.api.checkStatus}`,
  method: POST,
  response: () =>
    delay(0).then(() => {
      return require('./response/check/check.post.500');
    }),
};
