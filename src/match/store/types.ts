import { MatchTeams } from '../../builderGame/store/types';
import { MatchType } from '../../_shared/types';

export type Match = {
  id: string;
  teams: MatchTeams;
  date: string;
  place: string;
  matchType: MatchType;
};
