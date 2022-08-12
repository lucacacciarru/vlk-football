import { useGetPlayerQuery } from '../../player/store';
import { Player } from '../../_shared/types';

export function useGetSinglePlayer(id: string) {
  const { player } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      player: data?.find(post => post.id === id),
    }),
  });
  return player as Player;
}
