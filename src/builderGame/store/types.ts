import { PayloadAction } from "@reduxjs/toolkit";

export enum BUILDER_GAME_ACTION_TYPES {
  ADD_SELECTED_PLAYERS = "builderGame/addSelectedPlayers",
}

export type BuilderGameState = {
  chosenPlayers: {
    availablePlayers: string[];
    selectedPlayers: string[];
  };
};

export type AddSelectedPlayersPayload = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export type AddSelectedPlayers = PayloadAction<
  AddSelectedPlayersPayload,
  BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYERS
>;
