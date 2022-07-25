import { Button, ButtonProps } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types';
import {
  useCreateTeams,
  useGetMatchRules,
  useSelectedPlayers,
} from '../../hook';
import { generatesBalancedTeams } from '../../utils';

export const CreateTeamButton: React.FC<ButtonProps> = props => {
  const { t } = useTranslation();

  const selectedPlayers = useSelectedPlayers();
  const navigate = useNavigate();
  const createMatchTeams = useCreateTeams();
  const { numberOfPlayers } = useGetMatchRules();

  const createTeams = useCallback(() => {
    const teams = generatesBalancedTeams(selectedPlayers, numberOfPlayers);
    createMatchTeams(teams);
    navigate(`/${PATHS.PRE_MATCH}`);
  }, [createMatchTeams, navigate, numberOfPlayers, selectedPlayers]);

  return (
    <Button
      size="lg"
      onClick={createTeams}
      data-testid="createTeamButton"
      {...props}
    >
      {t('builderGame.playersPage.createTeamsButton')}
    </Button>
  );
};
