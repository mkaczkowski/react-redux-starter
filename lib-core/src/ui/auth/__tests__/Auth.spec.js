import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Auth from '../Auth';

describe('Auth - dumb', () => {
  afterEach(cleanup);

  it('should display loader', () => {
    const { container } = render(
      <Auth isLoading={true}>
        <div />
      </Auth>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display content', () => {
    const { container } = render(
      <Auth isLoading={false}>
        <div />
      </Auth>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
