import { createAction } from '@reduxjs/toolkit';
import {
  AddSelectedPlayersPayload,
  BUILDER_GAME_ACTION_TYPES,
  CreateMatchTeamsPayload,
  PopulateAvailablePlayersPayload,
} from './types';

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
