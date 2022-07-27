import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { resetGame } from '../../../builderGame/store/actions';
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
        url: 'matches',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch }) {
        try {
          dispatch(resetGame());
        } catch (err) {}
      },
      invalidatesTags: ['Matches'],
    }),
  }),
});

export const { useGetMatchesQuery, usePostMatchMutation } = matchesApi;
