import { useGetPlayersQuery } from '../../player/store';

export function useFilteredPlayers(idList: string[]) {
  const { filteredPlayers } = useGetPlayersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      filteredPlayers: data?.filter(player => idList.includes(player.id)),
    }),
  });
  return filteredPlayers;
}
