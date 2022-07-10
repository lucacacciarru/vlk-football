import { Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../../_shared/components';
import { PATHS } from '../../_shared/types';
import { MatchDetails } from '../components';

export const MatchInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack alignItems="center">
      <Text as="h1" color="white.0" textStyle="h1">
        {t('match.matchInfo.title')}
      </Text>
      <MatchDetails />
      <LinkButton to={PATHS.MATCHES} mt="12">
        {t('match.matchInfo.goToMatches')}
      </LinkButton>
    </Stack>
  );
};
