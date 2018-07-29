import 'regenerator-runtime/runtime';
import { testSaga } from 'redux-saga-test-plan';
import watchForAuth, { auth } from '../auth';
import { actions as authActions } from '@core/reducers/auth';
import { login } from '@core/api/auth';

it('watchForAuth', () => {
  testSaga(watchForAuth)
    .next()
    .takeLatest(authActions.authAction, auth)
    .next()
    .isDone();
});

it('auth', () => {
  const payload = { email: 'test@gmail.com' };
  const mockedUser = { id: '123' };

  testSaga(auth, { payload })
    .next()
    .call(login, payload)
    .next(mockedUser)
    .put(authActions.authSuccessAction(mockedUser))
    .next()
    .isDone();
});
