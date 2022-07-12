import { HStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { TeamsName } from '../../../_shared/types/general';
import { useGetTeams } from '../../hook';
import { MatchTeams } from '../../store/types';
import { Team } from '../Team';

export const ContainerTeams: React.FC = () => {
  const teams = useGetTeams();
  const teamsKey = useMemo(() => Object.keys(teams || {}), [teams]);
  const renderTeam = useMemo(
    () =>
      teamsKey.map(key => (
        <Team
          teamMaking={teams[key as keyof MatchTeams]}
          team={key as TeamsName}
          key={key}
        />
      )),
    [teams, teamsKey],
  );
  return (
    <HStack
      w="full"
      minH="80vh"
      gap="12"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      {renderTeam}
    </HStack>
  );
};
