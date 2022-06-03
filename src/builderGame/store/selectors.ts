import { createSelector } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';

const baseSelector = (state: DefaultRootState) => state.builderGame;

export const getChosenPlayers = createSelector(
  baseSelector,
  builderGameState => builderGameState.chosenPlayers,
);

export const getSelectedPlayer = createSelector(
  baseSelector,
  builderGameState => builderGameState.chosenPlayers.selectedPlayers,
);

export const getTeams = createSelector(
  baseSelector,
  builderGameState => builderGameState.match,
);
