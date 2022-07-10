//TODO: Add logic to compare the chosen sport and the chosenPlayer length
import { PATHS } from '../../_shared/types';
import { useGetChosenPlayers } from './useGetChosenPlayers';

export function useCheckPathnameAndChosenPlayers(pathname: string) {
  const preMatchPath = `/${PATHS.PRE_MATCH}`;
  const chosenPlayer = useGetChosenPlayers().selectedPlayers;

  if (pathname === preMatchPath && chosenPlayer.length < 10) {
    return false;
  }

  return true;
}
