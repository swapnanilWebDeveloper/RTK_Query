import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scienceApi = createApi({
    reducerPath: 'scienceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4040/' }),
    endpoints: (builder) => ({
      getScience: builder.query({
        query: () => `science`,
        providesTags : ['science'],
      }),
      addScience : builder.mutation({
        query: ({physics, chemistry, mathematics,id}) => ({
            url : `science`,
            method : 'POST',
            body : {physics, chemistry, mathematics,id}
        }),
        invalidatesTags : ['science'],
      }),
      deleteScience : builder.mutation({
        query: (id) => ({
            url : `science/${id}`,
            method : 'DELETE',
        }),
        invalidatesTags : ['science'],
      }),
      updateScience : builder.mutation({
        query: ({id, physics, chemistry, mathematics}) => ({
            url : `science/${id}`,
            method : 'PATCH',
            body : {physics, chemistry, mathematics}
        }),
        invalidatesTags : ['science'],
      }),
    }),
  })
  
  
  export const { useGetScienceQuery, useAddScienceMutation, useDeleteScienceMutation , useUpdateScienceMutation} = scienceApi