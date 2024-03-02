import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
      getAccounts : builder.query({
        query: () => `accounts`,
        transformResponse : (response) => response.sort((a,b) => b.amount - a.amount),
        providesTags : ['accounts'],
      }),
      addAccounts : builder.mutation({
        query: (amount, id) => ({
            url : `accounts`,
            method : 'POST',
            body : {amount,id}
        }),
        invalidatesTags : ['accounts'],
      }),
      deleteAccounts : builder.mutation({
        query: (id) => ({
            url : `accounts/${id}`,
            method : 'DELETE',
        }),
        invalidatesTags : ['accounts'],
      }),
      updateAccounts : builder.mutation({
        query: ({id, amount}) => ({
            url : `accounts/${id}`,
            method : 'PATCH',
            body : {amount}
        }),
        invalidatesTags : ['accounts'],
      }),
   }),
})


export const { useGetAccountsQuery, useAddAccountsMutation, useDeleteAccountsMutation, useUpdateAccountsMutation } = adminApi;