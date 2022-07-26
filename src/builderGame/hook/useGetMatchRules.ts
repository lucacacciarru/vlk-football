import { useGetMatchType } from './useGetMatchType';
import { MatchType } from '../../_shared/types';
import { matchTypeMap } from '../utils/matchTypeMap';

export function useGetMatchRules() {
  const selectedGameMode = useGetMatchType();
  return matchTypeMap[selectedGameMode as MatchType];
}
