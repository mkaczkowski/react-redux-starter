import 'regenerator-runtime/runtime';
import { testSaga } from 'redux-saga-test-plan';
import { push } from 'connected-react-router';
import { loginSaga } from '../login';
import { actions as loginActions } from '../../reducers/login';
import { login } from '../../api/login';
import { User } from '../../model/User';
import notify from '../../utils/error/errorNotifier';

describe('login saga', () => {
  const payload = { email: 'test@gmail.com', password: 'Password!' };
  const mockedUser: User = { id: 1, username: 'sampleUserName' };

  it('should login with valid credentials', () => {
    testSaga(loginSaga, { payload })
      .next()
      .call(login, payload)
      .next(mockedUser)
      .put(loginActions.loginSuccessAction(mockedUser))
      .next()
      .put(push('/'))
      .next()
      .isDone();
  });

  it('should fail with unexpected error', () => {
    const error = new Error();
    testSaga(loginSaga, { payload })
      .next()
      .call(login, payload)
      .throw(error)
      .call(notify, error)
      .next()
      .isDone();
  });
});
