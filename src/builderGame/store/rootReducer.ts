import { createReducer } from '@reduxjs/toolkit';
import {
  addSelectedPlayers,
  createMatchTeams,
  changeSelectPlayersLength,
  removeSelectedPlayers,
  replayMatch,
  resetGame,
  updateDateAndPlaceMatch,
  updateMatchType,
} from './actions';
import {
  addSelectedPlayerCase,
  createMatchTeamsCase,
  changeSelectPlayersLengthCase,
  removeSelectedPlayerCase,
  replayMatchCase,
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
  matchType: 'futsal',
};

export const builderGameRootReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(updateMatchType, updateMatchTypeCase);
  builder.addCase(addSelectedPlayers, addSelectedPlayerCase);
  builder.addCase(removeSelectedPlayers, removeSelectedPlayerCase);
  builder.addCase(createMatchTeams, createMatchTeamsCase);
  builder.addCase(updateDateAndPlaceMatch, updateDateAndPlaceCase);
  builder.addCase(resetGame, resetGameCase);
  builder.addCase(replayMatch, replayMatchCase);
  builder.addCase(changeSelectPlayersLength, changeSelectPlayersLengthCase);
  builder.addDefaultCase(state => state);
});
