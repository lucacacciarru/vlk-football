import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PageHeading } from '../../_shared/components';
import { ColumnsContainer } from '../components';
import { CreateTeamButton } from '../components/CreateTeamButton';
import { useCheckPlayer } from '../hook/useCheckPlayer';

export const CreateTeams: React.FC = () => {
  const { isDisableCheckButton } = useCheckPlayer();
  const { t } = useTranslation();
  return (
    <Stack w="full" justifyContent="center" alignItems="center">
      <PageHeading
        heading={t('builderGame.playersPage.title')}
        body={t('builderGame.playersPage.body')}
      />
      <ColumnsContainer />
      <CreateTeamButton isDisabled={isDisableCheckButton} />
    </Stack>
  );
};
