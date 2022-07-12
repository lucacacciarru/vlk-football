import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayerCard } from '../../../_shared/components';
import { TeamsName } from '../../../_shared/types/general';
import { useFilteredPlayers } from '../../hook';
import { TeamMaking } from '../../store/types';

type Props = {
  teamMaking: TeamMaking;
  team: TeamsName;
};

export const Team: React.FC<Props> = ({ teamMaking, team }) => {
  const { t } = useTranslation();
  const selectedPlayers = useFilteredPlayers(teamMaking.players);
  const renderPlayers = useMemo(
    () =>
      selectedPlayers?.map(player => (
        <Stack key={player.id} alignItems="center" justifyContent="center">
          <PlayerCard {...player} team={team} size="regular" />
        </Stack>
      )),
    [selectedPlayers, team],
  );

  const colorTeam = useMemo(
    () =>
      team === 'vlk' ? 'brand.primary.regular' : 'brand.secondary.regular',
    [team],
  );

  return (
    <Stack w="full" gap="12">
      <Box textAlign="center" w="full">
        <Text
          as="h1"
          textStyle="team-name"
          color={colorTeam}
          textTransform="uppercase"
        >
          {team}
        </Text>
        <Text as="h3" textStyle="h3" color="white.0">
          {t('builderGame.preMatch.totalPointsTeam', {
            count: teamMaking.ratingsScore,
          })}
        </Text>
      </Box>
      <SimpleGrid
        spacing={{ base: '8', sm: '12', xl: '12' }}
        minChildWidth={{ base: '100%', sm: '150px', lg: '300px' }}
        w="full"
      >
        {renderPlayers}
      </SimpleGrid>
    </Stack>
  );
};
