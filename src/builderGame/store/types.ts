import { Action, PayloadAction } from '@reduxjs/toolkit';
import { Match } from '../../match/store';
import { MatchType, Player } from '../../_shared/types';
import { DateAndPlaceMatch } from '../types';

export enum BUILDER_GAME_ACTION_TYPES {
  UPDATE_MATCH_TYPE = 'builderGame/updateMatchType',
  POPULATE_AVAILABLE_PLAYERS = 'builderGame/populateAvailablePlayers',
  ADD_SELECTED_PLAYERS = 'builderGame/addSelectedPlayers',
  CREATE_MATCH_TEAMS = 'builderGame/createMatchTeams',
  UPDATE_DATE_AND_PLACE_MATCH = 'builderGame/updateDateAndPlaceMatch',
  RESET_GAME = 'builderGame/resetGame',
  REPLAY_MATCH = 'builderGame/replayMatch',
}

export type TeamMaking = {
  players: string[];
  ratingsScore: number;
};

export type MatchTeams = {
  vlk: TeamMaking;
  klv: TeamMaking;
};

export type BuilderGameState = {
  chosenPlayers: {
    availablePlayers: string[];
    selectedPlayers: string[];
  };
  matchType?: MatchType;
  teams: MatchTeams;
  date: string;
  place: string;
};

export type PopulateAvailablePlayersPayload = Player[];
export type UpdateGameModePayload = MatchType;

export type AddSelectedPlayersPayload = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export type UpdateDateAndPlaceMatchPayload = DateAndPlaceMatch;
export type ReplayMatchPayload = Omit<Match, 'date' | 'place'>;

export type UpdateGameMode = PayloadAction<
  UpdateGameModePayload,
  BUILDER_GAME_ACTION_TYPES.UPDATE_MATCH_TYPE
>;

export type PopulateAvailablePlayers = PayloadAction<
  PopulateAvailablePlayersPayload,
  BUILDER_GAME_ACTION_TYPES.POPULATE_AVAILABLE_PLAYERS
>;

export type AddSelectedPlayers = PayloadAction<
  AddSelectedPlayersPayload,
  BUILDER_GAME_ACTION_TYPES.ADD_SELECTED_PLAYERS
>;

export type CreateMatchTeamsPayload = MatchTeams;

export type CreateMatchTeams = PayloadAction<
  CreateMatchTeamsPayload,
  BUILDER_GAME_ACTION_TYPES.CREATE_MATCH_TEAMS
>;

export type updateDateAndPlaceMatch = PayloadAction<
  UpdateDateAndPlaceMatchPayload,
  BUILDER_GAME_ACTION_TYPES.UPDATE_DATE_AND_PLACE_MATCH
>;

export type ResetGame = Action<BUILDER_GAME_ACTION_TYPES.RESET_GAME>;

export type ReplayMatch = PayloadAction<
  ReplayMatchPayload,
  BUILDER_GAME_ACTION_TYPES.REPLAY_MATCH
>;
