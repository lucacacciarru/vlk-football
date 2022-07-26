import { CaseReducer } from '@reduxjs/toolkit';
import { removeSameElementInTwoList } from '../utils';
import {
  AddSelectedPlayers,
  BuilderGameState,
  CreateMatchTeams,
  PopulateAvailablePlayers,
  updateDateAndPlaceMatch,
  UpdateGameMode,
} from './types';

export const populateAvailablePlayersCase: CaseReducer<
  BuilderGameState,
  PopulateAvailablePlayers
> = (state, action) => {
  const playersIdList = action.payload.map(player => player.id);
  return {
    ...state,
    chosenPlayers: {
      ...state.chosenPlayers,
      availablePlayers: removeSameElementInTwoList(
        playersIdList,
        state.chosenPlayers.selectedPlayers,
      ),
    },
  };
};

export const addSelectedPlayersCase: CaseReducer<
  BuilderGameState,
  AddSelectedPlayers
> = (state, action) => ({
  ...state,
  chosenPlayers: {
    availablePlayers: action.payload.availablePlayers,
    selectedPlayers: action.payload.selectedPlayers,
  },
});

export const createMatchTeamsCase: CaseReducer<
  BuilderGameState,
  CreateMatchTeams
> = (state, action) => ({
  ...state,
  teams: action.payload,
});

export const updateDateAndPlaceCase: CaseReducer<
  BuilderGameState,
  updateDateAndPlaceMatch
> = (state, action) => ({
  ...state,
  date: action.payload.date,
  place: action.payload.place,
});

export const updateMatchTypeCase: CaseReducer<
  BuilderGameState,
  UpdateGameMode
> = (state, action) => ({
  ...state,
  matchType: action.payload,
});
