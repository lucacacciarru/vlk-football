import { MatchType } from '../../_shared/types';
import { matchTypeMap } from '../utils/matchTypeMap';

export function useGetMatchTypesList() {
  return Object.keys(matchTypeMap) as MatchType[];
}
