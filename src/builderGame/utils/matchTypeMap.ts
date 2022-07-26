import { IconLibrary } from '../../_shared/components/Icon/IconLibrary';
import { MatchType } from '../../_shared/types';

type GameModeOptions = {
  numberOfPlayers: number;
  maxNumberOfGoalkeepers: number;
  iconName: keyof IconLibrary;
};

export const matchTypeMap: Record<MatchType, GameModeOptions> = {
  football: {
    maxNumberOfGoalkeepers: 2,
    numberOfPlayers: 22,
    iconName: 'shirt_football',
  },
  futsal: {
    maxNumberOfGoalkeepers: 2,
    numberOfPlayers: 10,
    iconName: 'shirt_futsal',
  },
  seven: {
    maxNumberOfGoalkeepers: 2,
    numberOfPlayers: 14,
    iconName: 'shirt_seven',
  },
  three: {
    maxNumberOfGoalkeepers: 0,
    numberOfPlayers: 6,
    iconName: 'shirt_three',
  },
};
