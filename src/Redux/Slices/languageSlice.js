import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";

const languageSlice = createSlice({
    name: 'language',
    initialState: { language: localStorage.getItem("i18nextLng") || "en" }, 
    reducers: {
        setLanguage: (state, action) => {
            const language  = action.payload; 
            changeLanguage(language);
            state.language = language;
           
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
