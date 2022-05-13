import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Player } from "../types";

export const playerApi = createApi({
  reducerPath: "player",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ["Player"],
  endpoints: (builder) => ({
    getPlayer: builder.query<Player[], void>({
      query: () => "/players",
      providesTags: ["Player"],
    }),
    postPlayer: builder.mutation<Player, Partial<Player>>({
      query: (body) => ({
        url: "players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Player"],
    }),
  }),
});

export const { useGetPlayerQuery, usePostPlayerMutation } = playerApi;
