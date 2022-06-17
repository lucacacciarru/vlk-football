import { Stack } from '@chakra-ui/react';
import { Match } from '../../store';
import { MatchCardFooter } from '../MatchCardFooter';
import { MatchCardHeader } from '../MatchCardHeader';
import { MatchCardTeamsImage } from '../MatchCardTeamsImage';

export const MatchCard: React.FC<Match> = ({ teams, ...restMatch }) => {
  return (
    <Stack
      w={{ base: 'full', md: 'sm', xl: 'md' }}
      bg="black.80"
      color="white.0"
      p="6"
      borderRadius="lg"
      gap="4"
    >
      <MatchCardHeader {...restMatch} />
      <MatchCardTeamsImage {...teams} />
      <MatchCardFooter {...teams} />
    </Stack>
  );
};
