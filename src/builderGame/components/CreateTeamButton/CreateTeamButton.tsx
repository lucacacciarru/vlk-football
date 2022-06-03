import { Button, ButtonProps } from '@chakra-ui/react';
import { useCreateTeamButton } from './useCreateTeamButton';

export const CreateTeamButton: React.FC<ButtonProps> = props => {
  const { createTeams, buttonText } = useCreateTeamButton();
  return (
    <Button size="lg" onClick={createTeams} {...props}>
      {buttonText}
    </Button>
  );
};
