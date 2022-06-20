import { HStack, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Team } from '../../../builderGame/components/Team';
import { MatchTeams } from '../../../builderGame/store/types';
import { PlayerCardSkeleton } from '../../../_shared/components/PlayerCardSkeletonList';
import { TeamsName } from '../../../_shared/types/general';
import { useGetSingleMatch } from '../../hook';

export const MatchDetails: React.FC = () => {
  const { id } = useParams();
  const match = useGetSingleMatch(id as string);
  const teamNameKeys = Object.keys(match?.teams || {});

  const renderTeams = useMemo(
    () =>
      match ? (
        teamNameKeys.map(teamKey => {
          return (
            <Team
              team={teamKey as TeamsName}
              teamMaking={match?.teams[teamKey as keyof MatchTeams]}
            />
          );
        })
      ) : (
        <>
          <HStack gap="8">
            <PlayerCardSkeleton data-testId="skeletonList" numberOfItems={5} />
          </HStack>
          <HStack gap="8">
            <PlayerCardSkeleton data-testId="skeletonList" numberOfItems={5} />
          </HStack>
        </>
      ),
    [match, teamNameKeys],
  );
  return (
    <Stack gap="8">
      <HStack alignItems="center" w="full" gap="8" justifyContent="center">
        <Text as="p" color="black.50" textStyle="body-sm">
          Date: {match?.date}
        </Text>
        <Text as="p" color="black.50" textStyle="body-sm">
          Place: {match?.place}
        </Text>
      </HStack>
      <Stack gap="8" w="full" alignItems="center">
        {renderTeams}
      </Stack>
    </Stack>
  );
};
