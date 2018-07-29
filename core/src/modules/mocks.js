// @flow
export type MocksConfig = {};

export class Mocks {
  config: MocksConfig;

  run = (mocks: any) => {
    const fetchMock = require('fetch-mock');
    mocks.forEach(route => {
      let mock = {
        name: route.name,
        matcher: route.url,
        response: route.response,
        method: route.method,
      };

      fetchMock.mock(mock);
    });

    fetchMock.spy();
  };
}

export default new Mocks();
