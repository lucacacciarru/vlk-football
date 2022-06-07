import { useGetPlayerQuery } from '../../player/store';

export function useFilteredPlayers(idList: string[]) {
  const { filteredPlayers } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      filteredPlayers: data?.filter(player => idList.includes(player.id)),
    }),
  });
  return filteredPlayers;
}
