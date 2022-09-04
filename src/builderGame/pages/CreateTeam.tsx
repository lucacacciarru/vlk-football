import { HStack } from '@chakra-ui/react';
import { PlayerList } from '../components/PlayersList';
import { SelectedPlayersArea } from '../components/SelectedPlayersArea';

export const CreateTeam: React.FC = () => {
  return (
    <HStack justifyContent="space-between">
      <PlayerList />
      <SelectedPlayersArea />
    </HStack>
  );
};
