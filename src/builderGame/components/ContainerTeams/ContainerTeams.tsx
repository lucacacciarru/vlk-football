import { Stack } from '@chakra-ui/react';
import { useContainerTeams } from './useContainerTeams';

export const ContainerTeams: React.FC = () => {
  const { renderTeam } = useContainerTeams();
  return (
    <Stack
      w="full"
      minH="80vh"
      gap="12"
      alignItems="center"
      justifyContent="center"
    >
      {renderTeam}
    </Stack>
  );
};
