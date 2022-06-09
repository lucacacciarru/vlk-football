import { Box, Stack, Text } from '@chakra-ui/react';
import { ContainerTeams } from '../components/ContainerTeams';
import 'react-day-picker/dist/style.css';
import { SelectPlaceAndDateForm } from '../components/SelectPlaceAndDateForm';
import { useTranslation } from 'react-i18next';

export const PreMatch: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="8" p="8">
      <Stack
        w="100%"
        gap="4"
        alignItems="center"
        justifyContent="center"
        color="white.0"
      >
        <Box>
          <Text as="h1" textStyle="h1" textAlign="center">
            {t('builderGame.preMatch.title')}
          </Text>
          <Text as="p" textStyle="body-s" textAlign="center">
            {t('builderGame.preMatch.body')}
          </Text>
        </Box>
        <SelectPlaceAndDateForm />
      </Stack>
      <ContainerTeams />
    </Stack>
  );
};
