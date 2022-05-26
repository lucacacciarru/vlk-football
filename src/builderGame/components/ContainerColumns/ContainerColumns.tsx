import { HStack } from "@chakra-ui/react";
import { DndContext } from "@dnd-kit/core";
import { useContainerColumns } from "./useContainerColumns";

export const ContainerColumn: React.FC = () => {
  const { dndContextProps, renderColumns } = useContainerColumns();

  return (
    <HStack h="100vh" w="full" gap="16" justifyContent="center" px="24" py="12">
      <DndContext {...dndContextProps}>{renderColumns}</DndContext>
    </HStack>
  );
};
