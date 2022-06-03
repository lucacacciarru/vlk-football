import { Stack } from '@chakra-ui/react';
import { useContainerTeams } from './useContainerTeams';

export const ContainerTeams: React.FC = () => {
  const { renderTeam } = useContainerTeams();
  return (
    <Stack
      w="full"
      h="100vh"
      gap="24"
      alignItems="center"
      justifyContent="center"
    >
      {renderTeam}
    </Stack>
  );
};
