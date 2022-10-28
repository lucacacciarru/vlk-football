import { useCallback, useContext } from 'react';
import { BuilderContext } from '../components/FiltersContext';
import { Filters } from '../types';

export function useFilter() {
  const { setFilters, filters } = useContext(BuilderContext);

  const updateFilters = useCallback(
    (filterKey: Partial<keyof Filters>, value: string[] | number[]) => {
      if (setFilters) {
        setFilters(prev => ({ ...prev, [filterKey]: value }));
      }
    },
    [setFilters],
  );

  const checkIfValueIsOnFilters = useCallback(
    (filterKey: Partial<keyof Filters>, value: string | number) => {
      if (filters) {
        return filters[filterKey]?.includes(value as never);
      }
    },
    [filters],
  );

  return { updateFilters, checkIfValueIsOnFilters, ...filters };
}
