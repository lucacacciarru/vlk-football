import { HStack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { PlayerCard } from '../../../_shared/components';
import { TeamsName } from '../../../_shared/types/general';
import { useFilteredPlayers } from '../../hook';
import { TeamMaking } from '../../store/types';

type Props = {
  teamMaking: TeamMaking;
  team: TeamsName;
};

export const Team: React.FC<Props> = ({ teamMaking, team }) => {
  const selectedPlayers = useFilteredPlayers(teamMaking.players);
  const renderPlayers = useMemo(
    () =>
      selectedPlayers?.map(player => (
        <PlayerCard {...player} team={team} key={player.id} size="small" />
      )),
    [selectedPlayers, team],
  );

  return (
    <HStack gap="6">
      {renderPlayers}
      <Text as="h1" textStyle="team-name" color="brand.primary.regular">
        {team}
      </Text>
    </HStack>
  );
};
