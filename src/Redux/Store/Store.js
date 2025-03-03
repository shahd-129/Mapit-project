// Store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../slice/languageSlice";
import { authApi } from "../api/signup";
import tokenReducer from '../slice/tokenSlice'
import { merchentApi } from "../api/merchent";
import { warehouseApi } from "../api/warehouse";
import { usersApis } from "../api/users";
const store = configureStore({
  reducer: {
    lang: languageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [merchentApi.reducerPath]:merchentApi.reducer,
    [warehouseApi.reducerPath] : warehouseApi.reducer,
    [usersApis.reducerPath] : usersApis.reducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(merchentApi.middleware).concat(warehouseApi.middleware).concat(usersApis.middleware),
});

export default store;
