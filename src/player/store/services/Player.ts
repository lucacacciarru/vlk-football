import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { populateAvailablePlayers } from '../../../builderGame/store/actions';
import { Player } from '../types';

export const playerApi = createApi({
  reducerPath: 'players',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ['Players'],
  endpoints: builder => ({
    getPlayer: builder.query<Player[], void>({
      query: () => '/players',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log({ data });
          // `onSuccess` side-effect
          dispatch(populateAvailablePlayers(data));
        } catch (err) {
          console.log({ err });
        }
      },
      providesTags: ['Players'],
    }),

    postPlayer: builder.mutation<Player, Player>({
      query: body => ({
        url: 'players',
        method: 'POST',
        body,
      }),

      invalidatesTags: ['Players'],
    }),
  }),
});

export const { useGetPlayerQuery, usePostPlayerMutation } = playerApi;
