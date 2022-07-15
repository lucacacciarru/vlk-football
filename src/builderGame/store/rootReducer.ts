import { createReducer } from '@reduxjs/toolkit';
import {
  addSelectedPlayers,
  createMatchTeams,
  populateAvailablePlayers,
  updateDateAndPlaceMatch,
} from './actions';
import {
  addSelectedPlayersCase,
  createMatchTeamsCase,
  populateAvailablePlayersCase,
  updateDateAndPlaceCase,
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
  selectedSport: 'futsal',
  date: '',
  place: '',
};

export const builderGameRootReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(addSelectedPlayers, addSelectedPlayersCase);
  builder.addCase(createMatchTeams, createMatchTeamsCase);
  builder.addCase(populateAvailablePlayers, populateAvailablePlayersCase);
  builder.addCase(updateDateAndPlaceMatch, updateDateAndPlaceCase);
  builder.addDefaultCase(state => state);
});
