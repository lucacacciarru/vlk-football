import { HStack, Text } from '@chakra-ui/react';
import { Teams } from '../../../_shared/types/general';
import { TeamProp } from '../../store/types';
import { useTeam } from './useTeam';

type Props = {
  teamProp: TeamProp;
  team: Teams;
};

export const Team: React.FC<Props> = ({ teamProp, team }) => {
  const { renderPlayers, teamName } = useTeam({ teamProp, team });
  return (
    <HStack gap="6">
      {renderPlayers}
      <Text as="h1" textStyle="team-name" color="brand.primary.regular">
        {teamName}
      </Text>
    </HStack>
  );
};
