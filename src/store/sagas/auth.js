import { call, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';
import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@zssn:token');

  if (token) {
    try {
      yield call(api.get, `/people/${token}`);
      yield put(AuthActions.signInSuccess(token));
    } catch (error) {
      yield call([AsyncStorage, 'clear']);
      yield put(AuthActions.initCheckSuccess());
      NavigationService.navigate('SignIn');
    }
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signUp({
  name, age, gender, items,
}) {
  try {
    const response = yield call(api.post, '/people', {
      name, age, gender, items,
    });

    yield call([AsyncStorage, 'setItem'], '@zssn:token', response.data.id);

    yield put(AuthActions.signInSuccess(response.data.id));
    yield put(ToastActionsCreators.displayInfo('User create success'));

    NavigationService.navigate('Main');
  } catch (error) {
    yield put(ToastActionsCreators.displayError(error.response.data.error));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
  NavigationService.navigate('SignIn');
}
