import { HStack } from '@chakra-ui/react';
import { FiltersProvider } from '../../_shared/components/FiltersContext';
import { PlayerList, SelectedPlayersArea } from '../components';

export const CreateTeam: React.FC = () => {
  return (
    <HStack justifyContent="space-between">
      <FiltersProvider>
        <PlayerList />
        <SelectedPlayersArea />
      </FiltersProvider>
    </HStack>
  );
};
