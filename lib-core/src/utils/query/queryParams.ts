import queryString from 'qs';

// set given query params overriding existing ones
const setQueryParams = query => (window.location.search = queryString.stringify(query, { sort: false }));

const setQueryParam = query => {
  const queryParams = { ...getQueryParams(), ...query };
  window.location.search = queryString.stringify(queryParams, { sort: false });
};

export const getQueryParams = () => queryString.parse(window.location.search) || {};

export const hasQueryParam = (keys: string | Array<string>) => {
  const params = getQueryParams();
  if (Array.isArray(keys)) {
    return keys.some(key => params.hasOwnProperty(key));
  } else {
    return params[keys];
  }
};

export const getQueryParam = (keys: string | Array<string>) => {
  const params = getQueryParams();
  if (Array.isArray(keys)) {
    const result = {};
    keys.forEach(key => {
      if (params.hasOwnProperty(key)) result[key] = params[key];
    });
    return result;
  } else {
    return params[keys];
  }
};

export function getUrlWithParams(url, params) {
  if (!url) throw new Error('url is not specified!');
  return url + (url.indexOf('?') === -1 ? '?' : '&') + queryString.stringify(params, { sort: false });
}

export function getCurrentUrlWithParams(url, params) {
  return getUrlWithParams(window.location.href, params);
}

export function getUrlWithAllParams(url) {
  if (!url) throw new Error('url is not specified!');
  const params = getQueryParams();
  const queryStringified = queryString.stringify(params, { sort: false });
  if (!queryStringified) {
    return url;
  } else {
    return url + (url.indexOf('?') === -1 ? '?' : '&') + queryStringified;
  }
}
