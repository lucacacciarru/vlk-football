import { HStack } from '@chakra-ui/react';
import { PlayerList, SelectedPlayersArea } from '../components';

export const CreateTeam: React.FC = () => {
  return (
    <HStack justifyContent="space-between">
      <PlayerList />
      <SelectedPlayersArea />
    </HStack>
  );
};
