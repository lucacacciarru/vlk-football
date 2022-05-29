import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetPlayerQuery } from '../../player/store';
import { getChosenPlayers } from '../store/selectors';
import { gameRulesMap } from '../utils';

export function useCheckPlayer() {
  const { selectedPlayers } = useSelector(getChosenPlayers);
  const { player } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      player: data?.filter(item => selectedPlayers.includes(item.id)),
    }),
  });

  const rulesIsNotFollowed = useMemo(
    () => gameRulesMap.futsal(player || []),
    [player],
  );

  return rulesIsNotFollowed;
}
