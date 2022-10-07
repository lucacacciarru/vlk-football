import { useContext, useState } from 'react';
import { useGetMatchType } from '../../builderGame/hook';
import { BuilderContext } from '../../_shared/components/FiltersContext';
import { Filters, MatchType } from '../../_shared/types';
import { useGetPlayersQuery } from '../store';

export function useGetAllPlayersId() {
  const selectedMatchType = useGetMatchType() as MatchType;
  const { setFilters, ...filters } = useContext(BuilderContext);
  const [completeQuery, setCompleteQuery] = useState<string | undefined>();

  const filterQueryMap: Record<keyof Filters, string> = {
    matchType: 'possibleMatchTypes',
    role: 'goalkeeper',
    name: 'name_like',
    ratings: 'rating',
  };

  function getSingleQuery<T>(filter: keyof Filters, value: T) {
    const selectedFilter = filterQueryMap[filter];
    if (filter === 'matchType') {
      return `${selectedFilter}.${value}=true`;
    }
    return `${selectedFilter}=${value}`;
  }

  function generateCompleteQuery<T>(
    filter: keyof Filters,
    value: T,
  ): string | string[] {
    if (Array.isArray(value)) {
      return value.map(singleValue => getSingleQuery(filter, singleValue));
    }

    return [getSingleQuery(filter, value)];
  }

  function createQueryString() {
    const filtersKeys = Object.keys(filters);
    const list: string[] = [];

    const test: string[] = filtersKeys.map(filter => {
      const selectedValue = filters[filter as keyof Filters];
      const allQueries = generateCompleteQuery(
        filter as keyof Filters,
        selectedValue,
      );
      return allQueries;
    });

    return `?${test.join('&')}`;
  }

  const { allPlayersId } = useGetPlayersQuery(createQueryString(), {
    selectFromResult: ({ data }) => {
      return {
        allPlayersId: data
          ?.filter(player => player.possibleMatchTypes[selectedMatchType])
          .map(filteredPlayer => filteredPlayer.id),
      };
    },
  });

  return allPlayersId;
}
