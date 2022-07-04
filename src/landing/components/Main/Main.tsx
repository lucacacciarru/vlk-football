import { Button, Flex, Stack, StackProps, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../_shared/types';
import { TeamName } from '../TeamName';

const stackProps: StackProps = {
  gap: '4',
  w: { base: '100%', lg: '50vw', xl: '50vw' },
  h: 'full',
  justifyContent: 'center',
  textAlign: { base: 'center', lg: 'left' },
};

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack {...stackProps}>
      <Text color="white.0" as="h1" textStyle="main">
        {t('landing.main.firstTitle')} <br /> <TeamName />{' '}
        {t('landing.main.secondTitle')}
      </Text>
      <Text color="white.50">{t('landing.main.body')} </Text>
      <Flex
        gap={{ base: '2', xl: '4' }}
        flexDir={{ base: 'column', xl: 'row' }}
      >
        <Link to={PATHS.CREATE_TEAM}>
          <Button size="xl">{t('landing.main.createTeamsButton')}</Button>
        </Link>
        <Link to={PATHS.MATCH}>
          <Button marginInlineStart="0" size="xl" variant="outlineSecondary">
            {t('landing.main.previousGamesButton')}
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
};
