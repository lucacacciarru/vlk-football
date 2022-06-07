import { useSelector } from 'react-redux';
import { useGetPlayerQuery } from '../../player/store';
import { getSelectedPlayer } from '../store/selectors';

export function useSelectedPlayers() {
  const selectedPlayers = useSelector(getSelectedPlayer);
  const { fullSelectedPlayers } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data = [] }) => {
      return {
        fullSelectedPlayers: data.filter(item =>
          selectedPlayers.includes(item.id),
        ),
      };
    },
  });

  return fullSelectedPlayers;
}
