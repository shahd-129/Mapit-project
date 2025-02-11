import { authSlice } from "../Slices/authSlice";

export const authApi = authSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),

   
  }),
});

export const { useSignupMutation} = authApi