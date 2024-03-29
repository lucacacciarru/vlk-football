//TODO Add Player carousel from mobile version
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { useGetPlayersQuery } from '../../../player/store';
import { useShowPlayer } from './useShowPlayer';

export const ShowPlayer: React.FC = () => {
  const { data } = useGetPlayersQuery(undefined);
  const { renderPlayers, stackProps } = useShowPlayer(data);

  return (
    <Stack {...stackProps}>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing="8">
        {renderPlayers}
      </SimpleGrid>
    </Stack>
  );
};
