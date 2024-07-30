// index.jsx
import React from "react";
import { Provider } from "react-redux";

import AppNavigation from "./routes/AppNavigation";
import { store } from "./store/store";

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
