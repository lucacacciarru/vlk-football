import { Stack } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMemo } from "react";
import { ColumnPlayerItem } from "../ColumnPlayerItem";

type Props = {
  id: string;
  items: string[];
};

export const Column: React.FC<Props> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });
  const renderPlayerItem = useMemo(
    () => items.map((id) => <ColumnPlayerItem key={id} id={id} />),
    [items]
  );
  return (
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
        {renderPlayerItem}
      </Stack>
    </SortableContext>
  );
};
