import { createReducer } from '@reduxjs/toolkit';
import {
  addSelectedPlayers,
  createMatchTeams,
  populateAvailablePlayers,
} from './actions';
import {
  addSelectedPlayersCase,
  createMatchTeamsCase,
  populateAvailablePlayersCase,
} from './reducers';
import { BuilderGameState } from './types';

const INITIAL_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: [],
  },
};

export const builderGameRootReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(addSelectedPlayers, addSelectedPlayersCase);
  builder.addCase(createMatchTeams, createMatchTeamsCase);
  builder.addCase(populateAvailablePlayers, populateAvailablePlayersCase);
  builder.addDefaultCase(state => state);
});
