import { SimpleGrid } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useGetMatchesQuery } from '../../store';
import { MatchCard } from '../MatchCard';

export const PreviousMatchesList: React.FC = () => {
  const { data } = useGetMatchesQuery();
  const renderMatches = useMemo(
    () => data?.map(match => <MatchCard {...match} key={match.id} />),
    [data],
  );
  return (
    <SimpleGrid spacing="12" minChildWidth={{ base: '100%', md: '400px' }}>
      {renderMatches}
    </SimpleGrid>
  );
};
