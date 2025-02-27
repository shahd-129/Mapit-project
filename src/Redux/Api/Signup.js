import { baseApiSlice } from "./baseApiSlice";

export const authApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "merchant-dashboard/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: 'user/login',
        method: "POST",
        body,
       
      }),
    }),
   
  }),
});

export const { useSignupMutation , useLoginMutation} = authApi