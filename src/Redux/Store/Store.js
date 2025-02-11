// Store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../Slices/languageSlice";
import { authApi } from "../Api/Signup";
import tokenReducer from '../Slices/tokenSlice'
import { merchentApi } from "../Api/merchent";
const store = configureStore({
  reducer: {
    lang: languageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [merchentApi.reducerPath]:merchentApi.reducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(merchentApi.middleware),
});

export default store;
