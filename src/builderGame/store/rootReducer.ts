import { createReducer } from "@reduxjs/toolkit";
import { addSelectedPlayers } from "./actions";
import { addSelectedPlayersCase } from "./reducers";
import { BuilderGameState } from "./types";

const INITIAL_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: [],
  },
};

export const builderGameRootReducer = createReducer(
  INITIAL_STATE,
  (builder) => {
    builder.addCase(addSelectedPlayers, addSelectedPlayersCase);
    builder.addDefaultCase((state) => state);
  }
);
