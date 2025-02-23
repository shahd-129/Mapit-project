import { warehouseSlice } from "../Slices/warehouseSlice";

export const warehouseApi = warehouseSlice.enhanceEndpoints({addTagTypes:["WAREHOUSE"]}).injectEndpoints({
  endpoints: (builder) => ({
    getWarehouseData: builder.query({
      query: (params) => ({
        url: "warehouse",
        method: "GET",
        params
      }),
      providesTags:['WAREHOUSE']
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