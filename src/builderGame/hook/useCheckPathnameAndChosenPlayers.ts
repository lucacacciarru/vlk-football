import { PATHS } from '../../_shared/types';
import { useGetChosenPlayers } from './useGetChosenPlayers';
import { useGetMatchRules } from './useGetMatchRules';

export function useCheckPathnameAndChosenPlayers(pathname: string) {
  const preMatchPath = `/${PATHS.PRE_MATCH}`;
  const chosenPlayer = useGetChosenPlayers().selectedPlayers;
  const selectRules = useGetMatchRules();

  if (
    pathname === preMatchPath &&
    chosenPlayer.length !== selectRules.numberOfPlayers
  ) {
    return false;
  }

  return true;
}
