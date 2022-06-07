import { useSelector } from 'react-redux';
import { getChosenPlayers } from '../store/selectors';

export function useGetChosenPlayers() {
  return useSelector(getChosenPlayers);
}
