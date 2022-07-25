import { useGetMatchMode } from './useGetMatchMode';
import { Sports } from '../../_shared/types';
import { gameModeMap } from '../utils/gameModeMap';

export function useGetMatchRules() {
  const selectedGameMode = useGetMatchMode();
  return gameModeMap[selectedGameMode as Sports];
}
