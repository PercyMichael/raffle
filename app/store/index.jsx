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
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
