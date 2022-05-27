import {
  closestCorners,
  DndContextProps,
  DragOverEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetPlayerQuery } from "../../../player/store";
import { useUpdateChosenPlayers } from "../../hook";
import { getChosenPlayers } from "../../store/selectors";
import { findContainer, removeSameElementInTwoList } from "../../utils/";

export type ColumnList = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export function useContainerColumns() {
  const { data } = useGetPlayerQuery();
  const columnList = useSelector(getChosenPlayers);
  const updateChosenPlayers = useUpdateChosenPlayers();

  useEffect(() => {
    if (data?.length) {
      const filteredDataIds = removeSameElementInTwoList(
        data?.map((player) => player.id) || [],
        columnList.selectedPlayers
      );
      updateChosenPlayers({
        ...columnList,
        availablePlayers: filteredDataIds,
      });
    }
  }, [data, updateChosenPlayers]); // eslint-disable-line react-hooks/exhaustive-deps

  const sensors = useSensors(useSensor(PointerSensor));

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    const overId = over?.id || "";

    const activeContainer = findContainer(id, columnList) as keyof ColumnList;
    const overContainer = findContainer(overId, columnList) as keyof ColumnList;

    if (activeContainer === overContainer) return;

    const activeItems = columnList[activeContainer];
    const activeIndex = activeItems.indexOf(id as string);
    const changedColumns: ColumnList = {
      ...columnList,
      [activeContainer]: Array.from(
        new Set(
          columnList[activeContainer].filter((item) => item !== active.id)
        )
      ),
      [overContainer]: Array.from(
        new Set([
          columnList[activeContainer][activeIndex],
          ...columnList[overContainer],
        ])
      ),
    };
    updateChosenPlayers(changedColumns);
  }

  const dndContextProps: DndContextProps = {
    sensors,
    collisionDetection: closestCorners,
    onDragOver,
  };

  return {
    dndContextProps,
    columnList,
  };
}
