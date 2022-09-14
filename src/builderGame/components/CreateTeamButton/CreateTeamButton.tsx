import { Button, ButtonProps } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../_shared/components';
import { PATHS } from '../../../_shared/types';
import {
  useCheckPlayer,
  useCreateTeams,
  useGetMatchRules,
  useSelectedPlayers,
} from '../../hook';
import { generatesBalancedTeams } from '../../utils';

export const CreateTeamButton: React.FC<ButtonProps> = props => {
  const selectedPlayers = useSelectedPlayers();
  const navigate = useNavigate();
  const createMatchTeams = useCreateTeams();
  const { numberOfPlayers } = useGetMatchRules();

  const createTeams = useCallback(() => {
    const teams = generatesBalancedTeams(selectedPlayers, numberOfPlayers);
    createMatchTeams(teams);
    navigate(`/${PATHS.PRE_MATCH}`);
  }, [createMatchTeams, navigate, numberOfPlayers, selectedPlayers]);

  const { allConditionIsCorrect } = useCheckPlayer();

  return (
    <Button
      variant="solidIcon"
      size="lg"
      onClick={createTeams}
      data-testid="createTeamButton"
      position="absolute"
      bottom="0"
      right="0"
      isDisabled={!allConditionIsCorrect}
      {...props}
    >
      <Icon name="arrowRight" size="8" color="white.0" />
    </Button>
  );
};
