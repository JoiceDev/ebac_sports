import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    //requisições (endpoints) - arrow function que recebe o builder e retorna um obj
    getItems: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetItemsQuery } = api

export default api
