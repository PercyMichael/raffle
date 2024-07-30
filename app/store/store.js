import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
