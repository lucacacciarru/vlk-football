import { CaseReducer } from '@reduxjs/toolkit';
import { removeSameElementInTwoList } from '../utils';
import {
  AddSelectedPlayers,
  BuilderGameState,
  CreateMatchTeams,
  PopulateAvailablePlayers,
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
