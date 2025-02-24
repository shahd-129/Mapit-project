import { baseApiSlice } from "./baseApiSlice";

export const merchentApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMerchent: builder.query({ 
      query: () => ({
        url: 'auth/me',
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response?.body,
    }),
  }),
});

export const { useGetMerchentQuery } = merchentApi;
