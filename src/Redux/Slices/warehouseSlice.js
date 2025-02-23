import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const warehouseSlice = createApi({
  reducerPath: "warehouse",

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mapit-staging.herokuapp.com/api/v1/',
    prepareHeaders: (headers) => { 
        const token = localStorage.getItem("token") || null
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        const lang = localStorage.getItem("i18nextLng") || "ar-SA"
        headers.set("Accept-Language", lang)
        return headers
    }
     
  }),
  endpoints: (builder) => ({}),
});
 