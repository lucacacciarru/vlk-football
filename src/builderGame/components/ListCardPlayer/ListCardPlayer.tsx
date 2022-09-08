import { Box, BoxProps } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import {
  useAddSelectedPlayer,
  useCheckPlayer,
  useGetChosenPlayers,
  useRemoveSelectedPlayer,
} from '../../hook';
import { ListCardPlayerContent } from './ListCardPlayerContent';

type Props = {
  id: string;
};

export const ListCardPlayer: React.FC<Props> = ({ id }) => {
  const addSelectedPlayer = useAddSelectedPlayer();
  const removeSelectedPlayer = useRemoveSelectedPlayer();
  const { isRightNumberOfPlayers } = useCheckPlayer();
  const { selectedPlayers } = useGetChosenPlayers();
  const isSelected = selectedPlayers.includes(id);

  const addPlayer = useCallback(
    () => addSelectedPlayer(id),
    [addSelectedPlayer, id],
  );

  const removePlayer = useCallback(
    () => removeSelectedPlayer(id),
    [id, removeSelectedPlayer],
  );

  const onClick = useMemo(() => {
    if (!isSelected && isRightNumberOfPlayers) {
      //TODO: add notification function to show toast when it will be created
      return undefined;
    }

    if (isSelected) {
      return removePlayer;
    }

    return addPlayer;
  }, [isRightNumberOfPlayers, isSelected, addPlayer, removePlayer]);

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
