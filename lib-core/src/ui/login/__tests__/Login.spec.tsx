import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Login from '../Login';

describe('Login - dumb', () => {
  afterEach(cleanup);

  it('should display loader', () => {
    const { container } = render(
      <Login isLoading>
        <div />
      </Login>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display content', () => {
    const { container } = render(
      <Login>
        <div />
      </Login>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
