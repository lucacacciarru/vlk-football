import { createAction } from '@reduxjs/toolkit';
import {
  AddSelectedPlayerPayload,
  BUILDER_GAME_ACTION_TYPES,
  CreateMatchTeamsPayload,
  ChangeSelectPlayersLengthPayload,
  RemoveSelectedPlayerPayload,
  ReplayMatchPayload,
  UpdateDateAndPlaceMatchPayload,
  UpdateMatchTypePayload,
} from './types';

export const updateMatchType = createAction<
  UpdateMatchTypePayload,
  BUILDER_GAME_ACTION_TYPES.UPDATE_MATCH_TYPE
>(BUILDER_GAME_ACTION_TYPES.UPDATE_MATCH_TYPE);

export const changeSelectPlayersLength = createAction<
  ChangeSelectPlayersLengthPayload,
  BUILDER_GAME_ACTION_TYPES.CHANGE_SELECTED_PLAYERS_LENGTH
>(BUILDER_GAME_ACTION_TYPES.CHANGE_SELECTED_PLAYERS_LENGTH);

export const addSelectedPlayers = createAction<
  AddSelectedPlayerPayload,
  BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYER
>(BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYER);

export const removeSelectedPlayers = createAction<
  RemoveSelectedPlayerPayload,
  BUILDER_GAME_ACTION_TYPES.REMOVE_SELECTED_PLAYER
>(BUILDER_GAME_ACTION_TYPES.REMOVE_SELECTED_PLAYER);

export const createMatchTeams = createAction<
  CreateMatchTeamsPayload,
  BUILDER_GAME_ACTION_TYPES.CREATE_MATCH_TEAMS
>(BUILDER_GAME_ACTION_TYPES.CREATE_MATCH_TEAMS);

export const updateDateAndPlaceMatch = createAction<
  UpdateDateAndPlaceMatchPayload,
  BUILDER_GAME_ACTION_TYPES.UPDATE_DATE_AND_PLACE_MATCH
>(BUILDER_GAME_ACTION_TYPES.UPDATE_DATE_AND_PLACE_MATCH);

export const replayMatch = createAction<
  ReplayMatchPayload,
  BUILDER_GAME_ACTION_TYPES.REPLAY_MATCH
>(BUILDER_GAME_ACTION_TYPES.REPLAY_MATCH);

export const resetGame = createAction(BUILDER_GAME_ACTION_TYPES.RESET_GAME);
