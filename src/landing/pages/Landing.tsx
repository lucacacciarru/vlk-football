import { HStack } from '@chakra-ui/react';
import { LandingProvider } from '../components/LandingContext/LandingContext';
import { Main } from '../components';
import { ShowPlayer } from '../components/ShowPlayer';

export const Landing: React.FC = () => {
  return (
    <LandingProvider>
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
