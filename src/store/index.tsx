import { combineReducers, configureStore } from "@reduxjs/toolkit";

import auth from "./features/auth";
import theme from "./features/theme";

const reducers = combineReducers({
  auth,
  theme,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
