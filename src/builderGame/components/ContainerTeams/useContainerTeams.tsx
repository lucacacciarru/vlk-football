import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Teams } from '../../../_shared/types/general';
import { getTeams } from '../../store/selectors';
import { MatchTeams } from '../../store/types';
import { Team } from '../Team';

function useGetTeams() {
  return useSelector(getTeams);
}

export function useContainerTeams() {
  const teams = useGetTeams();
  const teamsKey = useMemo(() => Object.keys(teams || {}), [teams]);
  const renderTeam = useMemo(
    () =>
      teamsKey.map(key => (
        <Team
          teamMaking={teams[key as keyof MatchTeams]}
          team={key as Teams}
          key={key}
        />
      )),
    [teams, teamsKey],
  );

  return {
    renderTeam,
  };
}
