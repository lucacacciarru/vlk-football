import { Box } from '@chakra-ui/react';
import { ListCardPlayerContent } from './ListCardPlayerContent';

type Props = {
  id: string;
};

export const ListCardPlayer: React.FC<Props> = ({ id }) => {
  return (
    <Box data-testid={id}>
      <Box px="10" id={id} h="24" w="full" bg="white.0" borderRadius="lg">
        <ListCardPlayerContent id={id} />
      </Box>
    </Box>
  );
};
