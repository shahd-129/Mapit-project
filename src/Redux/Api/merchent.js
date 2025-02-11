import { merchentSlice } from "../Slices/merchentSlice";

export const merchentApi = merchentSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMerchent: builder.query({ 
      query: () => ({
        url: '/me',
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response?.body,
    }),
  }),
});

export const { useGetMerchentQuery } = merchentApi;
