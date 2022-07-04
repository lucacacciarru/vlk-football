import { Box, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PreviousMatchesList } from '../components';

export const Matches: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="8">
      <Box>
        <Text as="h1" textStyle="h1" color="white.0">
          {t('match.matches.title')}
        </Text>
        <Text as="p" textStyle="body-xs" color="white.50">
          {t('match.matches.body')}
        </Text>
      </Box>
      <PreviousMatchesList />
    </Stack>
  );
};
