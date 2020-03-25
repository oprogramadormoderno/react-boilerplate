import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  SIGN_IN,
  FETCH_USER,
  LOGOUT_USER,
  IReducerAuthState,
  AuthActionTypes,
} from './types';

const initialState: IReducerAuthState = {
  token: undefined,
  user: undefined,
};

const persistConfig = {
  storage,
  key: 'auth',
  whitelist: ['token', 'user'],
};

const reducers = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case FETCH_USER:
      return {
        ...state,
        user: { ...action.payload },
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: undefined,
        user: undefined,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, reducers);
