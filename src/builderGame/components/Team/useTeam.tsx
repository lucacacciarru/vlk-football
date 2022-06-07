import { useMemo } from 'react';
import { useGetPlayerQuery } from '../../../player/store';
import { PlayerCard } from '../../../_shared/components';
import { Teams } from '../../../_shared/types/general';
import { TeamMaking } from '../../store/types';

type Params = {
  teamMaking: TeamMaking;
  team: Teams;
};

export function useTeam({ team, teamMaking }: Params) {
  const { teamPlayers } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      teamPlayers: data?.filter(item => teamMaking?.players.includes(item.id)),
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
