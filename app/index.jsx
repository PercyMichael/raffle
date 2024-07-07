// index.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigation from './routes/AppNavigation';

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
