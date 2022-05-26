import { createAction } from "@reduxjs/toolkit";
import { AddSelectedPlayersPayload, BUILDER_GAME_ACTION_TYPES } from "./types";

export const addSelectedPlayers = createAction<
  AddSelectedPlayersPayload,
  BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYERS
>(BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYERS);
