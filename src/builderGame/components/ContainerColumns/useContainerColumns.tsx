import {
  closestCorners,
  DndContextProps,
  DragEndEvent,
  DragOverEvent,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";
import { useGetPlayerQuery } from "../../../player/store";
import { useBuilderGame } from "../../hook";
import { removeSameElementInTwoList } from "../../utils";
import { Column } from "../Column";

type ColumnList = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export function useContainerColumns() {
  const { data } = useGetPlayerQuery();
  const { selectPlayers } = useBuilderGame();

  const [columnList, setColumnList] = useState<ColumnList>({
    availablePlayers: [],
    selectedPlayers: [],
  });

  const sensors = useSensors(useSensor(PointerSensor));

  function findContainer(id: UniqueIdentifier) {
    if (id in columnList) {
      return id;
    }

    return Object.keys(columnList).find((key) =>
      columnList[key as keyof ColumnList].includes(id as string)
    );
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    const overId = over?.id || "";

    const activeContainer = findContainer(id) as keyof ColumnList;
    const overContainer = findContainer(overId) as keyof ColumnList;

    if (activeContainer === overContainer) return;

    setColumnList((prev) => {
      const activeItems = prev[activeContainer];
      const activeIndex = activeItems.indexOf(id as string);

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          prev[activeContainer][activeIndex],
          ...prev[overContainer],
        ],
      };
    });
  }

  function onDragEnd(event: DragEndEvent) {
    const { over } = event;
    const overContainerData = over?.data?.current?.sortable.items;
    selectPlayers(overContainerData);
  }

  const dndContextProps: DndContextProps = {
    sensors,
    collisionDetection: closestCorners,
    onDragOver,
    onDragEnd,
  };

  const renderColumns = useMemo(
    () =>
      Object.entries(columnList).map((column) => (
        <Column id={column[0]} items={column[1]} key={column[0]} />
      )),
    [columnList]
  );

  useEffect(() => {
    const filteredDataIds = removeSameElementInTwoList(
      data?.map((player) => player.id) || [],
      columnList.selectedPlayers
    );
    setColumnList((prev) => ({
      ...prev,
      availablePlayers: filteredDataIds,
    }));
  }, [columnList.selectedPlayers, data]);

  return {
    dndContextProps,
    renderColumns,
  };
}
