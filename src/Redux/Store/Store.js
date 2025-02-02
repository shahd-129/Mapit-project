// Store.js
import { configureStore } from "@reduxjs/toolkit";

import languageReducer from "../Slices/languageSlice";
import { authApi } from "../Api/Signup";
const store = configureStore({
  reducer: {
    lang: languageReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
