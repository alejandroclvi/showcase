import {call, put, takeEvery} from 'redux-saga/effects';
import {signInAnonym} from '../../../firebase/auth';

function* signInAnonymous() {
  try {
    const uid = yield call(signInAnonym);
    yield put({type: 'SIGN_IN_ANONYM_SUCCESS', uid});
  } catch (error) {
    yield put({type: 'SIGN_IN_ANONYM_FAIL', error});
  }
}

export function* watchSignInAnonymSaga() {
  yield takeEvery('SIGN_IN_ANONYM', signInAnonymous);
}
