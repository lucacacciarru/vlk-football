import { useContext } from 'react';
import { useGetMatchType } from '../../builderGame/hook';
import { BuilderContext } from '../../_shared/components/FiltersContext';
import { Filters, MatchType } from '../../_shared/types';
import { useGetPlayersQuery } from '../store';

export function useGetAllPlayersId() {
  const selectedMatchType = useGetMatchType() as MatchType;
  const { filters, sort } = useContext(BuilderContext);

  const filterQueryMap: Record<keyof Filters, string> = {
    matchType: 'possibleMatchTypes',
    roles: 'roles',
    name: 'name_like',
    ratings: 'rating',
  };

  const sortQueryMap: Record<typeof sort, string> = {
    ratingAsc: '_sort=rating',
    ratingDesc: `_sort=rating&_order=desc`,
    nameAsc: '_sort=name',
    nameDesc: '_sort=name&_order=desc',
  };

  function getSingleQuery<T>(filter: keyof Filters, value: T) {
    const selectedFilter = filterQueryMap[filter];
    if (filter === 'matchType' || filter === 'roles') {
      return `${selectedFilter}.${value}=true`;
    }
    return `${selectedFilter}=${value}`;
  }

  function createQueryString() {
    const filterKeyList = Object.keys(filters);
    const singleQueryList: string[] = [];
    filterKeyList.forEach(filterKey => {
      const filterValue = filters[filterKey as keyof Filters];
      if (filterValue?.length) {
        filterValue.forEach(value => {
          singleQueryList.push(
            getSingleQuery(filterKey as keyof Filters, value),
          );
        });
      }
    });

    singleQueryList.push(sortQueryMap[sort]);

    const completedQuery = singleQueryList.join('&');
    return '?' + completedQuery;
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
