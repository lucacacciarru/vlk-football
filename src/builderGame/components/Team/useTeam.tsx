import { useMemo } from 'react';
import { useGetPlayerQuery } from '../../../player/store';
import { PlayerCard } from '../../../_shared/components';
import { Teams } from '../../../_shared/types/general';
import { TeamProp } from '../../store/types';

type Params = {
  teamProp: TeamProp;
  team: Teams;
};

export function useTeam({ team, teamProp }: Params) {
  const { teamPlayers } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      teamPlayers: data?.filter(item => teamProp?.players.includes(item.id)),
    }),
  });

  const renderPlayers = useMemo(
    () =>
      teamPlayers?.map(player => (
        <PlayerCard {...player} team={team} key={player.id} size="small" />
      )),
    [team, teamPlayers],
  );

  const teamName = team.toUpperCase();

  return { renderPlayers, teamName };
}
