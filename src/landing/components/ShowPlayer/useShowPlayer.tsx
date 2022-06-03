import { Box, StackProps } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { Player } from '../../../player/store';
import { PlayerCard } from '../../../_shared/components';
import { PlayerCardSkeleton } from '../../../_shared/components/PlayerCardSkeletonList';
import { LandingContext } from '../LandingContext';

export function useShowPlayer(data: Player[] | undefined) {
  const { selectedTeam } = useContext(LandingContext);
  const pickRandomPlayer = useMemo(
    () =>
      data?.length
        ? Array.from({ length: 4 }, () =>
            Math.floor(Math.random() * data?.length),
          )
        : [],
    [data?.length],
  );

  const renderPlayers = useMemo(
    () =>
      data?.length ? (
        pickRandomPlayer.map((randomIndex, i) => {
          const selectedPlayer = data[randomIndex];
          const cardTranslate = i % 2 === 0 ? 'translateY(-1rem)' : '';
          return (
            <Box
              transform={{
                base: '0',
                xl: cardTranslate,
              }}
              key={`${selectedPlayer.id}${i}`}
            >
              <PlayerCard {...selectedPlayer} team={selectedTeam} />
            </Box>
          );
        })
      ) : (
        <PlayerCardSkeleton numberOfItems={4} />
      ),
    [data, pickRandomPlayer, selectedTeam],
  );

  const stackProps: StackProps = {
    overflow: 'hidden',
    py: '6',
    w: { base: '100%', xl: '35%' },
    h: { base: 'auto', xl: '80vh' },
    align: 'center',
    justifyContent: 'center',
  };

  return { renderPlayers, stackProps };
}
