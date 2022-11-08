import { useCallback, useContext } from 'react';
import { BuilderContext } from '../components/FiltersContext';
import { Sort } from '../types';

export function useSort() {
  const { setSort, sort } = useContext(BuilderContext);

  const listOfSortOptions: Sort[] = [
    'nameAsc',
    'nameDesc',
    'ratingAsc',
    'ratingDesc',
  ];

  const updateSort = useCallback(
    (sortOption: Sort) => {
      if (setSort) {
        setSort(sortOption);
      }
    },
    [setSort],
  );

  return {
    updateSort,
    sort,
    listOfSortOptions,
  };
}
