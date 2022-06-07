import { HStack, Text } from '@chakra-ui/react';
import { Teams } from '../../../_shared/types/general';
import { TeamMaking } from '../../store/types';
import { useTeam } from './useTeam';

type Props = {
  teamMaking: TeamMaking;
  team: Teams;
};

export const Team: React.FC<Props> = ({ teamMaking, team }) => {
  const { renderPlayers, teamName } = useTeam({ teamMaking, team });
  return (
    <HStack gap="6">
      {renderPlayers}
      <Text as="h1" textStyle="team-name" color="brand.primary.regular">
        {teamName}
      </Text>
    </HStack>
  );
};
