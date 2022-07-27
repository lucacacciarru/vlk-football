import { createReducer } from '@reduxjs/toolkit';
import {
  addSelectedPlayers,
  createMatchTeams,
  populateAvailablePlayers,
  resetGame,
  updateDateAndPlaceMatch,
  updateMatchType,
} from './actions';
import {
  addSelectedPlayersCase,
  createMatchTeamsCase,
  populateAvailablePlayersCase,
  resetGameCase,
  updateDateAndPlaceCase,
  updateMatchTypeCase,
} from './reducers';
import { BuilderGameState } from './types';

const INITIAL_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: [],
  },
  teams: {
    vlk: { players: [], ratingsScore: 0 },
    klv: { players: [], ratingsScore: 0 },
  },
  date: '',
  place: '',
};

export const builderGameRootReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(updateMatchType, updateMatchTypeCase);
  builder.addCase(addSelectedPlayers, addSelectedPlayersCase);
  builder.addCase(createMatchTeams, createMatchTeamsCase);
  builder.addCase(populateAvailablePlayers, populateAvailablePlayersCase);
  builder.addCase(updateDateAndPlaceMatch, updateDateAndPlaceCase);
  builder.addCase(resetGame, resetGameCase);
  builder.addDefaultCase(state => state);
});
