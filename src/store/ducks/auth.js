import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInSuccess: ['token'],
  signOut: null,
  initCheckSuccess: null,
  signUpRequest: ['name', 'age', 'gender', 'items'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({
  signedIn: true,
  token,
});

export const logout = state => state.merge({ signedIn: false, token: null });

export const checkSuccess = state => state.merge({ authChecked: true });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
});
