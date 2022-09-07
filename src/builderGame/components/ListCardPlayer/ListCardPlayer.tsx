import { Box, BoxProps } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import {
  useAddSelectedPlayer,
  useCheckPlayer,
  useGetChosenPlayers,
} from '../../hook';
import { ListCardPlayerContent } from './ListCardPlayerContent';

type Props = {
  id: string;
};

export const ListCardPlayer: React.FC<Props> = ({ id }) => {
  const addSelectedPlayer = useAddSelectedPlayer();
  const { isRightNumberOfPlayers } = useCheckPlayer();
  const { selectedPlayers } = useGetChosenPlayers();
  const isSelected = selectedPlayers.includes(id);
  const addPlayer = useCallback(
    () => addSelectedPlayer(id),
    [addSelectedPlayer, id],
  );

  const onClick = useMemo(
    //TODO: add notification function to show toast when it will be created
    () => {
      if (isRightNumberOfPlayers) {
        return () => {};
      }

      if (isSelected) {
        return () => {};
      }

      return addPlayer;
    },
    [addPlayer, isSelected, isRightNumberOfPlayers],
  );

  const boxOpacity: BoxProps['opacity'] = useMemo(
    () => (isSelected ? '0.3' : '1'),
    [isSelected],
  );

  return (
    <Box data-testid={id} onClick={onClick}>
      <Box
        px="10"
        id={id}
        h="24"
        w="full"
        bg="white.0"
        borderRadius="lg"
        opacity={boxOpacity}
      >
        <ListCardPlayerContent id={id} />
      </Box>
    </Box>
  );
};
