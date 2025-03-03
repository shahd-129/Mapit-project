import { baseApiSlice } from "./baseApiSlice";

export const usersApis = baseApiSlice.enhanceEndpoints({addTagTypes:["USERS"]}).injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ searchKey , role , type , warehouses , permissions }) => ({
        url: "user",
        method: "GET",
        params: {
          searchKey , role , type , warehouses , permissions
        }
      }),
      providesTags:['USERS'],
      transformResponse: (response, meta, arg) => response?.body,
    }),
  }),
});
export const {useGetUsersQuery} = usersApis