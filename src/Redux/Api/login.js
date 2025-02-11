
import { loginSlice } from "../Slices/loginSlice";

export const loginApi = loginSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'user/login',
        method: "POST",
        body,
       
      }),
    }),
  }),
});

export const {useLoginMutation} = loginApi



