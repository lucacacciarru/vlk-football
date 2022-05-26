import { Box, Stack, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ColumnPlayerItem } from "../ColumnPlayerItem";

type Props = {
  id: string;
  items: string[];
};

export const Column: React.FC<Props> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <Stack w="lg" border="2px solid white" borderRadius="xl">
      <Box color="white.0" minH="12" p="4" textAlign="center">
        <Text as="h3" textStyle="h3">
          Giocatori
        </Text>
        <Text textStyle="body-xs">Numero giocatori</Text>
      </Box>
      <SortableContext
        id={id}
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <Stack
          ref={setNodeRef}
          padding="4"
          gap="4"
          w="full"
          h="50vh"
          overflowY="scroll"
          overflowX="hidden"
        >
          {items.map((id) => (
            <ColumnPlayerItem key={id} id={id} />
          ))}
        </Stack>
      </SortableContext>
    </Stack>
  );
};
