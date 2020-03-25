import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { IReducerConfigState } from './config/types';

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  undefined,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : require('redux-devtools-extension').composeWithDevTools(
        applyMiddleware(...middleware)
      )
);

export const persistor = persistStore(store);

export interface IReduxState {
  config: IReducerConfigState;
}
