import { Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useGetAllPlayersId } from '../../../player/hook/';
import { AddPlayerModal } from '../AddPlayerModal';
import { ListCardPlayer } from '../ListCardPlayer';

export const PlayerList: React.FC = () => {
  const allPlayersId = useGetAllPlayersId();
  const renderPlayerItem = useMemo(() => {
    if (allPlayersId) {
      return allPlayersId.map(id => <ListCardPlayer key={id} id={id} />);
    }
  }, [allPlayersId]);
  return (
    <Stack
      alignItems="center"
      w={{ base: '30vw', '2xl': '22vw' }}
      h="88vh"
      borderRight="1px solid white"
      pr="8"
    >
      <Text textStyle="h3" color="white.0">
        Giocatori disponibili
      </Text>
      <Stack w="full" padding="4" gap="4" overflowY="scroll" overflowX="hidden">
        <AddPlayerModal />
        {renderPlayerItem}
      </Stack>
    </Stack>
  );
};
