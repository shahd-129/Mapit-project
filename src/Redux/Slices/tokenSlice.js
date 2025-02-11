
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

 const initialState = {
   token: null,
   user :null
 };

 const tokenSlice = createSlice({
   name: 'token',
   initialState,
   reducers: {
     setToken: (state, action) => {
       state.token = action.payload;
       localStorage.setItem('token', action.payload);
       const decodedToken = jwtDecode(action.payload);
       state.user = decodedToken;
     },
     clearToken: (state) => {
       state.token = null;
       localStorage.removeItem('token');
     },
   
   },
 });

 export const { setToken,clearToken } = tokenSlice.actions;
 export default tokenSlice.reducer;
