import { Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MatchDetails } from '../components';

export const MatchInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack alignItems="center">
      <Text as="h1" color="white.0" textStyle="h1">
        {t('match.matchInfo.title')}
      </Text>
      <MatchDetails />
    </Stack>
  );
};
