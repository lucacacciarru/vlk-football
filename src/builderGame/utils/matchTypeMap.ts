import { MatchType } from '../../_shared/types';

type GameModeOptions = {
  numberOfPlayers: number;
  maxNumberOfGoalkeepers: number;
};

export const matchTypeMap: Record<MatchType, GameModeOptions> = {
  football: {
    maxNumberOfGoalkeepers: 2,
    numberOfPlayers: 22,
  },
  futsal: {
    maxNumberOfGoalkeepers: 2,
    numberOfPlayers: 10,
  },
  seven: {
    maxNumberOfGoalkeepers: 2,
    numberOfPlayers: 14,
  },
  three: {
    maxNumberOfGoalkeepers: 0,
    numberOfPlayers: 6,
  },
};
