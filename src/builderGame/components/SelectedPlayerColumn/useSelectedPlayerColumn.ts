import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useCheckPlayer } from '../../hook/useCheckPlayer';

export function useSelectedPlayerColumn() {
  const { t } = useTranslation();
  const {
    gameCondition,
    numberOfSelectedGoalkeepers,
    numberOfSelectedPlayers,
    checkCorrectNumberOfPlayer,
    checkMaxNumberOfGoalkeepers,
  } = useCheckPlayer();

  const colorCorrectPlayersNumber = useMemo(
    () => (checkCorrectNumberOfPlayer ? 'brand.primary.regular' : 'red.400'),
    [checkCorrectNumberOfPlayer],
  );

  const colorCorrectGoalkeepersNumber = useMemo(
    () => (checkMaxNumberOfGoalkeepers ? 'brand.primary.regular' : 'red.400'),
    [checkMaxNumberOfGoalkeepers],
  );

  const conditionPlayerText = t('builderGame.playersColumn.totalPlayer', {
    players: numberOfSelectedPlayers,
    condition: gameCondition.correctNumberOfPlayers,
  });

  const conditionGoalkeepersText = t(
    'builderGame.playersColumn.totalGoalkeepers',
    {
      goalkeepers: numberOfSelectedGoalkeepers,
      condition: gameCondition.maxNumberOfGoalKeepers,
    },
  );

  const columnTitle = t('builderGame.playersColumn.selectedPlayersTitle');

  return {
    numberOfSelectedGoalkeepers,
    colorCorrectPlayersNumber,
    colorCorrectGoalkeepersNumber,
    conditionPlayerText,
    conditionGoalkeepersText,
    columnTitle,
  };
}
