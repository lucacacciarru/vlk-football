import { HStack } from '@chakra-ui/react';
import { MatchTeams } from '../../../builderGame/store/types';
import { MatchCardPlayers } from './MatchCardPlayers';
import { MatchCardRatings } from './MatchCardRatings';

export const MatchCardFooter: React.FC<MatchTeams> = teams => {
  const { klv, vlk } = teams;
  const playersId = [...vlk.players, ...klv.players];
  return (
    <HStack
      justifyContent="space-between"
      alignItems="flex-start"
      flexDir={{ base: 'column', lg: 'row' }}
      gap={{ base: '4', lg: '0' }}
    >
      <MatchCardRatings {...teams} />
      <MatchCardPlayers playerIds={playersId} />
    </HStack>
  );
};
