import { Button, ButtonProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useCreateTeamButton } from './useCreateTeamButton';

export const CreateTeamButton: React.FC<ButtonProps> = props => {
  const { createTeams } = useCreateTeamButton();
  const { t } = useTranslation();

  return (
    <Button size="lg" onClick={createTeams} {...props}>
      {t('builderGame.playersPage.createTeamsButton')}
    </Button>
  );
};
