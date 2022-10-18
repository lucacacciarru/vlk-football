import { useGetSinglePlayerQuery } from '../../player/store';
import { Player } from '../../_shared/types';

export function useGetSinglePlayer(id: string) {
  const { data } = useGetSinglePlayerQuery(id);
  return data as Player;
}
