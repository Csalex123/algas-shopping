import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './views/Home.view';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistedStore}>
        <HomeView />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

