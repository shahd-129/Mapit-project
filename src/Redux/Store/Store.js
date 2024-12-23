// Store.js
import { configureStore } from "@reduxjs/toolkit";

import languageReducer from "../Slices/languageSlice"
const store = configureStore({
    reducer: {
       lang: languageReducer,
    },
});

export default store;
