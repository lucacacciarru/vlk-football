import { useMemo } from 'react';
import { gameRulesMap } from '../utils';
import { useSelectedPlayers } from './useSelectedPlayers';

export function useCheckPlayer() {
  const selectedPlayers = useSelectedPlayers();

  const rulesIsNotFollowed = useMemo(
    () => gameRulesMap.futsal(selectedPlayers || []),
    [selectedPlayers],
  );

  return rulesIsNotFollowed;
}
