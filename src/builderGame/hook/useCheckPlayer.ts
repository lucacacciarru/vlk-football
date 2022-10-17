import { useMemo } from 'react';
import { useGetMatchRules } from './useGetMatchRules';
import { useSelectedPlayers } from './useSelectedPlayers';

export function useCheckPlayer() {
  const selectedPlayers = useSelectedPlayers();
  const { numberOfPlayers, maxNumberOfGoalkeepers } = useGetMatchRules();

  const isRightNumberOfPlayers = useMemo(
    () => selectedPlayers.length === numberOfPlayers,
    [numberOfPlayers, selectedPlayers.length],
  );

  const selectedGoalKeepers = useMemo(
    () => selectedPlayers.filter(player => player?.roles?.GK),
    [selectedPlayers],
  );

  const isRightNumberOfGoalkeepers = useMemo(
    () => selectedGoalKeepers.length <= maxNumberOfGoalkeepers,
    [maxNumberOfGoalkeepers, selectedGoalKeepers.length],
  );

  const allConditionIsCorrect = [
    isRightNumberOfPlayers,
    isRightNumberOfGoalkeepers,
  ].every(condition => condition);

  return {
    isRightNumberOfPlayers,
    isRightNumberOfGoalkeepers,
    allConditionIsCorrect,
    selectedGoalKeepers,
  };
}
