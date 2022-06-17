import { HStack } from '@chakra-ui/react';
import { LandingProvider } from '../components/LandingContext/LandingContext';
import { Main } from '../components';
import { ShowPlayer } from '../components/ShowPlayer';
import { MatchCard } from '../../match/components';

export const Landing: React.FC = () => {
  return (
    <LandingProvider>
      <MatchCard
        date="5 Giugno"
        place="Cagliari"
        teams={{
          klv: {
            players: ['a9609b8f-214d-4c02-bf57-61698383778d'],
            ratingsScore: 20,
          },
          vlk: {
            players: ['a9609b8f-214d-4c02-bf57-61698383778d'],
            ratingsScore: 25,
          },
        }}
      />
      <HStack
        h={{ base: 'auto', xl: '70vh' }}
        gap="24"
        justifyContent={'space-between'}
        flexDir={{ base: 'column-reverse', xl: 'row' }}
      >
        <Main />
        <ShowPlayer />
      </HStack>
    </LandingProvider>
  );
};
