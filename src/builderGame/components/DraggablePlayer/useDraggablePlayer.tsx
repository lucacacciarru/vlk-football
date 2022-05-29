import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';

export function useDraggablePlayer(id: UniqueIdentifier) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isDraggingBoxStyle = useMemo(
    () => ({
      opacity: isDragging ? '0.4' : '1',
      boxShadow: isDragging ? 'lg' : 'xs',
    }),
    [isDragging],
  );

  const boxProps = {
    ref: setNodeRef,
    style,
    ...isDraggingBoxStyle,
    ...attributes,
    ...listeners,
  };

  return {
    boxProps,
  };
}
