import { Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Match } from '../../store';
import { MatchCardFooter } from '../MatchCardFooter';
import { MatchCardHeader } from '../MatchCardHeader';
import { MatchCardTeamsImage } from '../MatchCardTeamsImage';

export const MatchCard: React.FC<Match> = ({ teams, id, ...restMatch }) => {
  return (
    <Link to={id}>
      <Stack
        bg="black.80"
        color="white.0"
        p="6"
        borderRadius="lg"
        gap="4"
        minH="md"
        justifyContent="center"
        _hover={{ outline: '1px solid #686868' }}
        role="matchCard"
      >
        <MatchCardHeader {...restMatch} />
        <MatchCardTeamsImage {...teams} />
        <MatchCardFooter {...teams} />
      </Stack>
    </Link>
  );
};
