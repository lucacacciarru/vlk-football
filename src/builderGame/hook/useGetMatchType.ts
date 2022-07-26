import { useSelector } from 'react-redux';
import { getMatchType } from '../store/selectors';

export function useGetMatchType() {
  return useSelector(getMatchType);
}
