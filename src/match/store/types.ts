import { MatchTeams } from '../../builderGame/store/types';

export type Match = {
  id: string;
  teams: MatchTeams;
  date: string;
  place: string;
};
