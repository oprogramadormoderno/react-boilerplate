import { combineReducers } from 'redux';

import configReducer from './config/reducers';
import authReducer from './auth/reducers';

export default combineReducers({
  config: configReducer,
  auth: authReducer,
});
