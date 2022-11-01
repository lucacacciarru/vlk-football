import { createTeam } from './createTeam';
import { listOfPlayers } from './listOfPlayers';
import { createPlayerModal } from './createPlayerModal';
import { preMatch } from './preMatch';
import { matchTypeRules } from './matchTypeRules';
import { selectMode } from './selectMode';
import { listPlayerCard } from './listPlayerCard';
import { changeMatchTypeModal } from './changeMatchTypeModal';
import { changeMatchTypeAlert } from './changeMatchTypeAlert';

export const builderGame = {
  listOfPlayers,
  createTeam,
  createPlayerModal,
  preMatch,
  matchTypeRules,
  selectMode,
  listPlayerCard,
  changeMatchTypeModal,
  changeMatchTypeAlert,
};
