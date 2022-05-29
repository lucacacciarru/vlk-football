import { HStack } from '@chakra-ui/react';
import { DndContext } from '@dnd-kit/core';
import { useSelector } from 'react-redux';
import { getChosenPlayers } from '../../store/selectors';
import { AvailablePlayersColumn } from '../AvailablePlayersColumn';
import { SelectedPlayerColumn } from '../SelectedPlayerColumn';
import { useColumnsContainer } from './useColumnsContainer';

export const ColumnsContainer: React.FC = () => {
  const { dndContextProps } = useColumnsContainer();
  const test = useSelector(getChosenPlayers);

  return (
    <HStack w="full" gap="16" justifyContent="center" px="24" py="12">
      <DndContext {...dndContextProps}>
        <AvailablePlayersColumn
          id="selectedPlayers"
          items={test.availablePlayers}
        />
        <SelectedPlayerColumn
          id="selectedPlayers"
          items={test.selectedPlayers}
        />
      </DndContext>
    </HStack>
  );
};
