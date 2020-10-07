import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './views/Home.view';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HomeView />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

