import { Stack } from '@chakra-ui/react';
import { PlayerList } from '../components/PlayersList';

export const CreateTeam: React.FC = () => {
  return (
    <Stack justifyContent="left">
      <PlayerList />
    </Stack>
  );
};
