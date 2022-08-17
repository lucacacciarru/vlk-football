import { Box, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../../_shared/components';
import { PATHS } from '../../_shared/types';
import { MatchDetails } from '../components';
import { ReplayMatchButton } from '../components/ReplayMatchButton';

export const MatchInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text as="h1" color="white.0" textStyle="h1" textAlign="center">
        {t('match.matchInfo.title')}
      </Text>
      <MatchDetails />
      <HStack
        gap="6"
        mt="20"
        w="full"
        justifyContent="center"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <LinkButton to={PATHS.MATCHES}>
          {t('match.matchInfo.goToMatchesButton')}
        </LinkButton>
        <ReplayMatchButton />
      </HStack>
    </Box>
  );
};
