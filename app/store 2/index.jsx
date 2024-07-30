// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk';
// import AuthReducers from './reducers'; // Adjust path if necessary

// // Combine reducers, if you have more reducers, add them here
// const RootReducer = combineReducers({
//   AuthReducer: AuthReducers, // Ensure this matches what you use in useSelector
// });

// // Create store with root reducer
// export const store = createStore(RootReducer, applyMiddleware(thunk));

// store/index.jsx
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Ensure your rootReducer is set up correctly

// Create the store using configureStore
const store = configureStore({
  reducer: rootReducer,
});

export default store;
