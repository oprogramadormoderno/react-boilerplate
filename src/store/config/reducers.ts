import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  UPDATE_CONNECTION,
  SW_INIT,
  SW_UPDATE,
  IReducerConfigState,
  ConfigActionTypes,
} from './types';

const initialState: IReducerConfigState = {
  connected: true,
  serviceWorkerInitialized: false,
  serviceWorkerRegistration: undefined,
  serviceWorkerUpdated: false,
};

const persistConfig = {
  storage,
  key: 'config',
  whitelist: ['connected'],
};

const reducers = (state = initialState, action: ConfigActionTypes) => {
  switch (action.type) {
    case UPDATE_CONNECTION:
      return {
        ...state,
        connected: action.payload,
      };
    case SW_INIT:
      return {
        ...state,
        serviceWorkerInitialized: true,
      };
    case SW_UPDATE:
      return {
        ...state,
        serviceWorkerRegistration: action.payload,
        serviceWorkerUpdated: true,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, reducers);
