import { useCallback, useContext } from 'react';
import { BuilderContext } from '../components/FiltersContext';
import { Filters } from '../types';

export function useFilter() {
  const { setFilters, ...filters } = useContext(BuilderContext);

  const updateFilters = useCallback(
    (filterKey: Partial<keyof Filters>, value: string[] | number[]) => {
      if (setFilters) {
        setFilters(prev => ({ ...prev, [filterKey]: value }));
      }
    },
    [setFilters],
  );

  return { updateFilters, ...filters };
}
