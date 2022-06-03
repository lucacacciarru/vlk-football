import { Button, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ColumnsContainer } from '../components';
import { CreateTeamButton } from '../components/CreateTeamButton';
import { useCheckPlayer } from '../hook/useCheckPlayer';

export const CreateTeams: React.FC = () => {
  const { isDisableCheckButton } = useCheckPlayer();
  const { t } = useTranslation();
  return (
    <Stack minH="100vh" w="full" justifyContent="center" alignItems="center">
      <Stack justifyContent="center" textAlign="center">
        <Text color="white.0" textStyle="h1">
          {t('builderGame.playersPage.title')}
        </Text>
        <Text color="white.50">{t('builderGame.playersPage.body')}</Text>
      </Stack>
      <ColumnsContainer />
      <CreateTeamButton />
    </Stack>
  );
};
