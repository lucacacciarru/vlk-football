import { SimpleGrid } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Sports } from '../../../_shared/types';
import { gameModeMap } from '../../utils/gameModeMap';
import { GameModeCard } from '../GameModeCard';

export const GameModeContainer: React.FC = () => {
  const allGameMode = Object.keys(gameModeMap);

  const renderGameModes = useMemo(
    () =>
      allGameMode.map(gameMode => (
        <GameModeCard gameMode={gameMode as Sports} key={gameMode} />
      )),
    [allGameMode],
  );
  return (
    <SimpleGrid
      spacing={{ base: '16', '2xl': '40' }}
      minChildWidth={{ base: 'full', lg: '300px', '2xl': '400px' }}
      w="full"
    >
      {renderGameModes}
    </SimpleGrid>
  );
};
