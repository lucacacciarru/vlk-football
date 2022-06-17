import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Match } from '../types';

export const matchesApi = createApi({
  reducerPath: 'matches',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ['Matches'],
  endpoints: builder => ({
    getMatches: builder.query<Match[], void>({
      query: () => '/matches',
      providesTags: ['Matches'],
    }),
    postMatch: builder.mutation<Match, Match>({
      query: body => ({
        url: 'players',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Matches'],
    }),
  }),
});

export const { useGetMatchesQuery, usePostMatchMutation } = matchesApi;
