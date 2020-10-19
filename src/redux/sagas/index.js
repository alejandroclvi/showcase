import {all, fork} from 'redux-saga/effects';
import * as firestoreSagas from './firebase/firestore';
import * as authSagas from './firebase/auth';

export default function* rootSaga() {
  yield all(
    [...Object.values(authSagas), ...Object.values(firestoreSagas)].map(fork),
  );
}
