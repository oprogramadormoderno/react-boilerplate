import { combineReducers } from 'redux';

import configReducer from './config/reducers';

export default combineReducers({
  config: configReducer,
});
