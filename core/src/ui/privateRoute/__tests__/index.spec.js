import React from 'react';
import { cleanup } from 'react-testing-library';
import PrivateRoute from '@core/ui/privateRoute/index';
import { renderWithReduxAndRouter } from '@core/utils/test/test';

describe('PrivateRoute - connected', () => {
  const ProtectedComponent = () => <div data-testid="route-content">test</div>;

  afterEach(cleanup);

  it('should display protected route if user exists in store', () => {
    const result = renderWithReduxAndRouter(<PrivateRoute path="" component={ProtectedComponent} />, {
      initialState: { auth: { user: { id: '1' } } },
    });
    const { queryByTestId } = result;
    const routeContent = queryByTestId('route-content');
    expect(routeContent).toBeDefined();
  });

  it("should display alternative route if user doesn't exist", () => {
    const ProtectedComponent = () => <div data-testid="route-content">test</div>;
    const result = renderWithReduxAndRouter(<PrivateRoute path="" component={ProtectedComponent} />, {
      initialState: { auth: { user: null } },
    });
    const { queryByTestId } = result;
    const routeContent = queryByTestId('route-content');
    expect(routeContent).toBeNull();
  });
});
