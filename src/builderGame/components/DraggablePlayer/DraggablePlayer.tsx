import { Box } from '@chakra-ui/react';
import { useSortable } from '@dnd-kit/sortable';
import { DraggablePlayerContent } from './DraggablePlayerContent';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';

type Props = {
  id: string;
};

export const DraggablePlayer: React.FC<Props> = ({ id }) => {
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

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...isDraggingBoxStyle}
      {...attributes}
      {...listeners}
    >
      <Box px="10" id={id} h="24" w="full" bg="white.0" borderRadius="lg">
        <DraggablePlayerContent id={id} />
      </Box>
    </Box>
  );
};
