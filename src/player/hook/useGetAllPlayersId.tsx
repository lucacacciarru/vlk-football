import { useGetMatchType } from '../../builderGame/hook';
import { MatchType } from '../../_shared/types';
import { useGetPlayersQuery } from '../store';

export function useGetAllPlayersId() {
  const selectedMatchType = useGetMatchType() as MatchType;

  const { allPlayersId } = useGetPlayersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      allPlayersId: data
        ?.filter(player => player.possibleMatchTypes[selectedMatchType])
        .map(filteredPlayer => filteredPlayer.id),
    }),
  });

  return allPlayersId;
}
