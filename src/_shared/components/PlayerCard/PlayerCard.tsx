import { Box } from '@chakra-ui/react';
import { Player } from '../../../player/store';
import { Teams } from '../../types/general';
import { PlayerBackCard } from '../PlayerBackCard';
import { PlayerFrontCard } from '../PlayerFrontCard';
import { usePlayerCard } from './usePlayerCard';

type Props = Player & {
  team?: Teams;
  size?: 'regular' | 'small';
};

export const PlayerCard: React.FC<Props> = ({
  id,
  sports,
  team,
  size,
  ...player
}) => {
  const { backContainerProps, frontContainerProps, onClick } = usePlayerCard({
    team,
    size,
  });

  return (
    <Box
      position="relative"
      cursor="pointer"
      __css={{ perspective: '100rem', transformStyle: 'preserve-3d;' }}
      onClick={onClick}
      userSelect="none"
    >
      <PlayerFrontCard
        player={player}
        team={team}
        size={size}
        {...frontContainerProps}
      />
      <PlayerBackCard
        description={player.description}
        name={player.name}
        {...backContainerProps}
      />
    </Box>
  );
};
