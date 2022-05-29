import { Box } from '@chakra-ui/react';
import { DraggablePlayerContent } from './DraggablePlayerContent';
import { useDraggablePlayer } from './useDraggablePlayer';

type Props = {
  id: string;
};

export const DraggablePlayer: React.FC<Props> = ({ id }) => {
  const { boxProps } = useDraggablePlayer(id);

  return (
    <Box {...boxProps}>
      <Box px="10" id={id} h="24" w="full" bg="white.0" borderRadius="lg">
        <DraggablePlayerContent id={id} />
      </Box>
    </Box>
  );
};
