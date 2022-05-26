import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Player } from "../types";

export const playerApi = createApi({
  reducerPath: "players",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ["Players"],
  endpoints: (builder) => ({
    getPlayer: builder.query<Player[], void>({
      query: () => "/players",
      providesTags: ["Players"],
    }),
    postPlayer: builder.mutation<Player, Partial<Player>>({
      query: (body) => ({
        url: "players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Players"],
    }),
  }),
});

export const { useGetPlayerQuery, usePostPlayerMutation } = playerApi;
