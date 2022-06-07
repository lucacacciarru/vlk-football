import { Button, ButtonProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types';
import { useCreateTeams, useSelectedPlayers } from '../../hook';
import { generatesBalancedTeams } from '../../utils';

export const CreateTeamButton: React.FC<ButtonProps> = props => {
  const { t } = useTranslation();

  const selectedPlayers = useSelectedPlayers();
  const navigate = useNavigate();
  const createMatchTeams = useCreateTeams();

  function createTeams() {
    const teams = generatesBalancedTeams(selectedPlayers);
    createMatchTeams(teams);
    navigate(`/${PATHS.PRE_MATCH}`);
  }

  return (
    <Button size="lg" onClick={createTeams} {...props}>
      {t('builderGame.playersPage.createTeamsButton')}
    </Button>
  );
};
