import { SimpleGrid } from '@chakra-ui/react';
import { useMemo } from 'react';
import { MatchType } from '../../../_shared/types';
import { matchTypeMap } from '../../utils/matchTypeMap';
import { MatchTypeCard } from '../MatchTypeCard';

export const MatchTypeContainer: React.FC = () => {
  const allMatchTypes = Object.keys(matchTypeMap);

  const renderGameModes = useMemo(
    () =>
      allMatchTypes.map(matchType => (
        <MatchTypeCard matchType={matchType as MatchType} key={matchType} />
      )),
    [allMatchTypes],
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
