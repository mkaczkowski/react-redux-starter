import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Action } from 'redux-actions';
import { actions as loginActions } from '../reducers/login';
import login from '../api/login';
import Logger from '../modules/logger';
import { User } from '../model/User';
import notify from '../utils/error/errorNotifier';
import { LoginFormPayload } from '../model/form/LoginFormPayload';

const logger = Logger.getInstance('LoginSaga');

export function* loginSaga({ payload }: Action<LoginFormPayload>) {
  try {
    logger.debug({ payload });
    const user: User = yield (call as any)(login, payload);
    yield put(loginActions.loginSuccessAction(user));
    yield put(push('/'));
  } catch (error) {
    logger.warn(error);
    yield call(notify, error);
  }
}

export default function* watchForLogin() {
  yield takeLatest(loginActions.loginAction, loginSaga);
}
