import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@store';
// import { SW_INIT, SW_UPDATE } from '@store/config/types';
import App from '@screens/app/app.component';

import 'assets/styles/global.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.register({
//   onSuccess: () => store.dispatch({ type: SW_INIT }),
//   onUpdate: registration =>
//     store.dispatch({ type: SW_UPDATE, payload: registration }),
// });
