import { useSelector } from 'react-redux';
import { getGameMode } from '../store/selectors';

export function useGetMatchMode() {
  return useSelector(getGameMode);
}
