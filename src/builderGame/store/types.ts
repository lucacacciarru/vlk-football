import { PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../../player/store';

export enum BUILDER_GAME_ACTION_TYPES {
  POPULATE_AVAILABLE_PLAYERS = 'builderGame/populateAvailablePlayers',
  ADD_SELECTED_PLAYERS = 'builderGame/addSelectedPlayers',
  CREATE_MATCH_TEAMS = 'builderGame/createMatchTeams',
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
  teams: MatchTeams;
};

export type PopulateAvailablePlayersPayload = Player[];

export type AddSelectedPlayersPayload = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

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
