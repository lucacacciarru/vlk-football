import { Button, HStack } from "@chakra-ui/react";
import { DndContext } from "@dnd-kit/core";
import { useSelector } from "react-redux";
import { useCheckPlayer } from "../../hook/useCheckPlayer";
import { getChosenPlayers } from "../../store/selectors";
import { PlayerColumn } from "../PlayerColumn";
import { useContainerColumns } from "./useContainerColumns";

export const ContainerColumn: React.FC = () => {
  const { dndContextProps } = useContainerColumns();
  const test = useSelector(getChosenPlayers);
  const { rulesIsNotFollowed } = useCheckPlayer();
  return (
    <HStack h="100vh" w="full" gap="16" justifyContent="center" px="24" py="12">
      <DndContext {...dndContextProps}>
        <PlayerColumn id="selectedPlayers" items={test.availablePlayers} />
        <PlayerColumn id="selectedPlayers" items={test.selectedPlayers} />
      </DndContext>
      <Button isDisabled={!rulesIsNotFollowed}>Test</Button>
    </HStack>
  );
};
