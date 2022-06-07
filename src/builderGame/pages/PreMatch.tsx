import { Stack, Text } from '@chakra-ui/react';
import { ContainerTeams } from '../components/ContainerTeams';
import 'react-day-picker/dist/style.css';
import { SelectPlaceAndDateForm } from '../components/SelectPlaceAndDateForm';

export const PreMatch: React.FC = () => {
  return (
    <Stack gap="8" p="8">
      <Stack
        w="100%"
        gap="4"
        alignItems="center"
        justifyContent="center"
        color="white.0"
      >
        <Text as="h1" textStyle="h1" textAlign="center">
          Build game
        </Text>
        <SelectPlaceAndDateForm />
      </Stack>
      <ContainerTeams />
    </Stack>
  );
};