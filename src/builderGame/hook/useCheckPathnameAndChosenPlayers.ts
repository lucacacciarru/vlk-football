import { PATHS } from '../../_shared/types';
import { useGetChosenPlayers } from './useGetChosenPlayers';
import { useGetMatchMode } from './useGetMatchMode';
import { useGetMatchRules } from './useGetMatchRules';

export function useCheckPathnameAndChosenPlayers(pathname: string) {
  const preMatchPath = `/${PATHS.PRE_MATCH}`;
  const createTeamPath = `/${PATHS.CREATE_TEAM}`;
  const chosenPlayer = useGetChosenPlayers().selectedPlayers;
  const selectMatchMode = useGetMatchMode();
  const selectRules = useGetMatchRules();

  if (
    pathname === preMatchPath &&
    chosenPlayer.length < selectRules.numberOfPlayers
  ) {
    return false;
  }

  if (pathname === createTeamPath && !selectMatchMode) {
    return false;
  }

  return true;
}
