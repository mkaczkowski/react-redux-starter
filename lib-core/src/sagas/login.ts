
import { put, takeLatest, call } from 'redux-saga/effects';
import { actions as authActions } from 'lib-core/src/reducers/auth';
import { login } from 'lib-core/src/api/auth';
import { push } from 'connected-react-router';
import Logger from 'lib-core/src/modules/logger';

// import type { User, FormPayload } from 'core/src/constants/flowTypes';
import { ERROR_CODES } from 'lib-core/src/constants/errorCodes';

const logger = Logger.getInstance('LoginSaga');

export function* loginSaga({ payload }: any): any {
  logger.debug({ payload });
  const { values, onSuccess, onError }: FormPayload = payload;
  try {
    const response: User = yield call(login, values);
    // yield call(SessionStorage.setAuthToken, response.auth_token); //TODO save auth token to session storage
    yield put(authActions.loginSuccessAction(response));
    yield call(onSuccess, response);
    yield put(push('/hero'));
  } catch (error) {
    logger.warn(error);
    yield call(onError, { error: ERROR_CODES.API.BAD_CREDENTIALS });
  }
}

export default function* watchForLogin(): any {
  yield takeLatest(authActions.loginAction, loginSaga);
}
