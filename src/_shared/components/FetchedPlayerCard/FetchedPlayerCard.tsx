import { Box } from '@chakra-ui/react';
import { useCallback } from 'react';
import {
  useGetSinglePlayer,
  useRemoveSelectedPlayer,
} from '../../../builderGame/hook';
import { TeamsName } from '../../types';
import { PlayerCard } from '../PlayerCard';

type Props = {
  id: string;
  team?: TeamsName;
};

export const FetchedPlayerCard: React.FC<Props> = ({ id, team }) => {
  const removeSelectedPlayer = useRemoveSelectedPlayer();
  const removePlayer = useCallback(
    () => removeSelectedPlayer(id),
    [id, removeSelectedPlayer],
  );
  const playerData = useGetSinglePlayer(id);
  return (
    <Box onClick={removePlayer}>
      <PlayerCard {...playerData} team={team} />
    </Box>
  );
};
