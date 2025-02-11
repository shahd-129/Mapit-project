import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "auth",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://mapit-staging.herokuapp.com/api/v1/",
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
  }),
  endpoints: (builder) => ({}),
});
