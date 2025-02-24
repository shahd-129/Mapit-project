import { baseApiSlice } from "./baseApiSlice";

export const warehouseApi = baseApiSlice.enhanceEndpoints({addTagTypes:["WAREHOUSE"]}).injectEndpoints({
  endpoints: (builder) => ({
    getWarehouseData: builder.query({
      query: (params) => ({
        url: "warehouse",
        method: "GET",
        params
      }),
      providesTags:['WAREHOUSE'],
      transformResponse: (response, meta, arg) => response?.body,
    }),
    addWarehouseData: builder.mutation({
      query: (body) => ({
        url: "warehouse",
        method: "POST",
        body
      }),
      invalidatesTags:['WAREHOUSE']
    }),
    updateWareHouseData: builder.mutation({
      query: (body) => ({
        url: "warehouse/update", 
        method:"POST",
        body,
      }),
      invalidatesTags: ["WAREHOUSE"],
    }) ,
    deleteWareHouseData: builder.mutation({
      query: (id) => ({
        url: `warehouse/${id}`, 
        method:"DELETE",
      }),
      invalidatesTags: ["WAREHOUSE"],
    }) 
  }),
});

export const { useGetWarehouseDataQuery , useAddWarehouseDataMutation ,
   useUpdateWareHouseDataMutation , useDeleteWareHouseDataMutation} = warehouseApi