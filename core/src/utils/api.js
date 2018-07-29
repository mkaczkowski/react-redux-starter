import Logger from '@core/modules/logger';

function requestHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

async function fetchIt(url, options) {
  const optionsWithHeaders = {
    ...options,
    credentials: 'omit',
    mode: 'cors',
    headers: requestHeaders(),
  };
  const request = new Request(url, optionsWithHeaders);
  const startDate = new Date();
  let data = {};
  let response = {};

  try {
    response = checkIfSnapshot() ? { status: 200 } : await fetch(request);

    if (response.status >= 400) throw new Error(response.status);
    data = await _getJsonData(response);

    Logger.apiLog({
      url: url,
      options: optionsWithHeaders,
      response: response,
      data: data,
      startDate: startDate,
    });
    return data;
  } catch (error) {
    Logger.apiLog({
      url: url,
      options: optionsWithHeaders,
      response: error,
      data: null,
      startDate: startDate,
    });
    // throw error;
    error.data = await _getJsonData(response);
    return Promise.reject(error);
  }
}

function checkIfSnapshot() {
  return window.navigator.userAgent === 'ReactSnap';
}

async function _getJsonData(response) {
  let result = {};
  try {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      result = await response.json();
    }
  } catch (err) {
    result = {};
  } //workaround for empty response data

  return result;
}

export { fetchIt as fetch };
