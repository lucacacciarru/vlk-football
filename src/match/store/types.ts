import { MatchTeams } from '../../builderGame/store/types';

export type Match = {
  teams: MatchTeams;
  date: string;
  place: string;
};
