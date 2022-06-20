import { Stack, Text } from '@chakra-ui/react';
import { MatchDetails } from '../components';

export const Match: React.FC = () => {
  return (
    <Stack alignItems="center">
      <Text as="h1" color="white.0" textStyle="h1">
        Match details
      </Text>
      <MatchDetails />
    </Stack>
  );
};
