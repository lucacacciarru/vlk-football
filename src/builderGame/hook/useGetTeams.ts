import { useSelector } from 'react-redux';
import { getTeams } from '../store/selectors';

export function useGetTeams() {
  return useSelector(getTeams);
}
