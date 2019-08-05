import { all, takeLatest } from 'redux-saga/effects';

import {
  signOut, init, signUp,
} from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    init(),

    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
  ]);
}
