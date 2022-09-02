import { useGetPlayersQuery } from '../store';

export function useGetAllPlayersId() {
  const { allPlayersId } = useGetPlayersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      allPlayersId: data?.map(player => player.id),
    }),
  });

  return allPlayersId;
}
