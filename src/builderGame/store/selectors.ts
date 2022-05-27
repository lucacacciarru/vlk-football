import { createSelector } from "@reduxjs/toolkit";
import { DefaultRootState } from "react-redux";

const baseSelector = (state: DefaultRootState) => state.builderGame;

export const getChosenPlayers = createSelector(
  baseSelector,
  (builderGameState) => builderGameState.chosenPlayers
);