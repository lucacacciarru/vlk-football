import { CaseReducer } from "@reduxjs/toolkit";
import { AddSelectedPlayers, BuilderGameState } from "./types";

export const addSelectedPlayersCase: CaseReducer<
  BuilderGameState,
  AddSelectedPlayers
> = (state, action) => ({
  ...state,
  selectedPlayers: action.payload,
});
