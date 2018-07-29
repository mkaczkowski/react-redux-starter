import React from 'react';
import { cleanup } from 'react-testing-library';
import PrivateRoute from '@core/ui/privateRoute/PrivateRoute';
import { renderWithRouter } from '@core/utils/test/test';

describe('PrivateRoute - dumb', () => {
  const ProtectedComponent = () => <div data-testid="route-content">test</div>;

  afterEach(cleanup);

  it('should display protected route if user exists', () => {
    const { queryByTestId } = renderWithRouter(
      <PrivateRoute path="" component={ProtectedComponent} user={{ id: '1' }} />
    );
    const routeContent = queryByTestId('route-content');
    expect(routeContent).not.toBeNull();
  });

  it('should display alternative route if no user', () => {
    const { queryByTestId } = renderWithRouter(
      <PrivateRoute path="" exact component={ProtectedComponent} user={null} />
    );
    const routeContent = queryByTestId('route-content');
    expect(routeContent).toBeNull();
  });
});
