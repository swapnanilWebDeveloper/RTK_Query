import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => `items`,
        providesTags : ['items'],
      }),
      addProducts : builder.mutation({
        query: ({name, brand, price, discount,id}) => ({
            url : `items`,
            method : 'POST',
            body : {name, brand, price, discount,id}
        }),
        invalidatesTags : ['items'],
      }),
      deleteProducts : builder.mutation({
        query: (id) => ({
            url : `items/${id}`,
            method : 'DELETE',
        }),
        invalidatesTags : ['items'],
      }),
      updateProducts : builder.mutation({
        query: ({id, name, brand, price, discount}) => ({
            url : `items/${id}`,
            method : 'PATCH',
            body : {id, name, brand, price, discount}
        }),
        invalidatesTags : ['items'],
      }),
    }),
  })
  

  export const { useGetProductsQuery, useAddProductsMutation, useDeleteProductsMutation, useUpdateProductsMutation} = productApi