import { HStack } from '@chakra-ui/react';
import {
  closestCorners,
  DndContext,
  DragOverEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useGetChosenPlayers, useUpdateChosenPlayers } from '../../hook';
import { ColumnList } from '../../types';
import { findContainer } from '../../utils';
import { AvailablePlayersColumn } from '../AvailablePlayersColumn';
import { SelectedPlayerColumn } from '../SelectedPlayerColumn';

export const ColumnsContainer: React.FC = () => {
  const chosenPlayers = useGetChosenPlayers();
  const updateChosenPlayers = useUpdateChosenPlayers();

  const sensors = useSensors(useSensor(PointerSensor));

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    const overId = over?.id || '';

    const activeContainer = findContainer(
      id,
      chosenPlayers,
    ) as keyof ColumnList;
    const overContainer = findContainer(
      overId,
      chosenPlayers,
    ) as keyof ColumnList;

    if (activeContainer === overContainer) return;

    const activeItems = chosenPlayers[activeContainer];
    const activeIndex = activeItems.indexOf(id as string);
    const changedColumns: ColumnList = {
      ...chosenPlayers,
      [activeContainer]: Array.from(
        new Set(
          chosenPlayers[activeContainer].filter(item => item !== active.id),
        ),
      ),
      [overContainer]: Array.from(
        new Set([
          chosenPlayers[activeContainer][activeIndex],
          ...chosenPlayers[overContainer],
        ]),
      ),
    };
    updateChosenPlayers(changedColumns);
  }

  return (
    <HStack w="full" gap="16" justifyContent="center" px="24" py="12">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragOver={onDragOver}
      >
        <AvailablePlayersColumn
          id="selectedPlayers"
          items={chosenPlayers.availablePlayers}
        />
        <SelectedPlayerColumn
          id="selectedPlayers"
          items={chosenPlayers.selectedPlayers}
        />
      </DndContext>
    </HStack>
  );
};
