import { createAction } from '@reduxjs/toolkit';
import {
  AddSelectedPlayersPayload,
  BUILDER_GAME_ACTION_TYPES,
  CreateMatchTeamsPayload,
  PopulateAvailablePlayersPayload,
  UpdateDateAndPlaceMatchPayload,
  UpdateGameModePayload,
} from './types';

export const updateMatchType = createAction<
  UpdateGameModePayload,
  BUILDER_GAME_ACTION_TYPES.UPDATE_MATCH_TYPE
>(BUILDER_GAME_ACTION_TYPES.UPDATE_MATCH_TYPE);

export const populateAvailablePlayers = createAction<
  PopulateAvailablePlayersPayload,
  BUILDER_GAME_ACTION_TYPES.POPULATE_AVAILABLE_PLAYERS
>(BUILDER_GAME_ACTION_TYPES.POPULATE_AVAILABLE_PLAYERS);

export const addSelectedPlayers = createAction<
  AddSelectedPlayersPayload,
  BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYERS
>(BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYERS);

export const createMatchTeams = createAction<
  CreateMatchTeamsPayload,
  BUILDER_GAME_ACTION_TYPES.CREATE_MATCH_TEAMS
>(BUILDER_GAME_ACTION_TYPES.CREATE_MATCH_TEAMS);

export const updateDateAndPlaceMatch = createAction<
  UpdateDateAndPlaceMatchPayload,
  BUILDER_GAME_ACTION_TYPES.UPDATE_DATE_AND_PLACE_MATCH
>(BUILDER_GAME_ACTION_TYPES.UPDATE_DATE_AND_PLACE_MATCH);

export const resetGame = createAction(BUILDER_GAME_ACTION_TYPES.RESET_GAME);
