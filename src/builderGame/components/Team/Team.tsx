import { Box, HStack, Text } from '@chakra-ui/react';
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

  const colorTeam = useMemo(
    () =>
      team === 'vlk' ? 'brand.primary.regular' : 'brand.secondary.regular',
    [team],
  );

  return (
    <HStack gap="6">
      {renderPlayers}
      <Box>
        <Text
          as="h1"
          textStyle="team-name"
          color={colorTeam}
          textTransform="uppercase"
        >
          {team}
        </Text>
        <Text as="h3" textStyle="h3" color="white.0">
          {teamMaking.ratingsScore} pts.
        </Text>
      </Box>
    </HStack>
  );
};
