
import { put, takeLatest, call } from 'redux-saga/effects';
import { actions as authActions } from 'lib-core/src/reducers/auth';
import { login } from 'lib-core/src/api/auth';
// import type { User } from 'core/src/constants/flowTypes';

export function* auth({ payload }: any): any {
  try {
    const user: User = yield call(login, payload);
    yield put(authActions.authSuccessAction(user));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default function* watchForAuth(): any {
  yield takeLatest(authActions.authAction, auth);
}
