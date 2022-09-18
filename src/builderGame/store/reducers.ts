import { CaseReducer } from '@reduxjs/toolkit';
import {
  AddSelectedPlayer,
  BuilderGameState,
  CreateMatchTeams,
  RemoveSelectedPlayer,
  ReplayMatch,
  ResetGame,
  updateDateAndPlaceMatch,
  UpdateGameMode,
} from './types';

export const addSelectedPlayerCase: CaseReducer<
  BuilderGameState,
  AddSelectedPlayer
> = (state, action) => ({
  ...state,
  chosenPlayers: {
    ...state.chosenPlayers,
    selectedPlayers: [...state.chosenPlayers.selectedPlayers, action.payload],
  },
});

export const removeSelectedPlayerCase: CaseReducer<
  BuilderGameState,
  RemoveSelectedPlayer
> = (state, action) => ({
  ...state,
  chosenPlayers: {
    ...state.chosenPlayers,
    selectedPlayers: state.chosenPlayers.selectedPlayers.filter(
      player => player !== action.payload,
    ),
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

export const resetGameCase: CaseReducer<
  BuilderGameState,
  ResetGame
> = state => ({
  ...state,
  chosenPlayers: {
    availablePlayers: [...state.chosenPlayers.selectedPlayers],
    selectedPlayers: [],
  },
  date: '',
  matchType: 'futsal',
  place: '',
  teams: {
    klv: {
      players: [],
      ratingsScore: 0,
    },
    vlk: {
      players: [],
      ratingsScore: 0,
    },
  },
});

export const replayMatchCase: CaseReducer<BuilderGameState, ReplayMatch> = (
  state,
  action,
) => {
  return {
    ...state,
    chosenPlayers: {
      selectedPlayers: [
        ...action.payload.teams.klv.players,
        ...action.payload.teams.vlk.players,
      ],
    },
    date: '',
    place: '',
    teams: action.payload.teams,
    matchType: action.payload.matchType,
  };
};
