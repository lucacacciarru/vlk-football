import { Button } from '@chakra-ui/react';
import { useCreateTeamButton } from './useCreateTeamButton';

export const CreateTeamButton: React.FC = () => {
  const { createTeams, buttonText } = useCreateTeamButton();
  return (
    <Button size="lg" onClick={createTeams}>
      {buttonText}
    </Button>
  );
};
