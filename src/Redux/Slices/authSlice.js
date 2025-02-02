import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "auth",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://mapit-staging.herokuapp.com/api/v1/merchant-dashboard",
  }),
  endpoints: (builder) => ({}),
});
