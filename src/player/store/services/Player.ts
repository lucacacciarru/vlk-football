import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { matchesApi } from '../../../match/store';
import { Player } from '../../../_shared/types';

export const playerApi = createApi({
  reducerPath: 'players',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ['Players'],
  endpoints: builder => ({
    getPlayers: builder.query<Player[], string | undefined>({
      query: filter => ({
        url: `/players/` + (filter || ''),
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch }) {
        try {
          dispatch(matchesApi.endpoints.getMatches.initiate());
        } catch (err) {}
      },
      providesTags: ['Players'],
    }),
    getSinglePlayer: builder.query<Player, string>({
      query: id => ({
        url: `/players/${id}`,
        method: 'GET',
      }),
      providesTags: ['Players'],
    }),
    postPlayer: builder.mutation<Player, Player>({
      query: body => ({
        url: `players`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Players'],
    }),
    deletePlayer: builder.mutation<{ success: boolean; id: string }, string>({
      query: id => ({
        url: `players/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Players'],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetSinglePlayerQuery,
  usePostPlayerMutation,
  useDeletePlayerMutation,
} = playerApi;
