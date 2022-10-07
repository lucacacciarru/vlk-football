import { useCallback, useContext } from 'react';
import { BuilderContext } from '../components/FiltersContext';
import { Filters } from '../types';

export function useFilter() {
  const { setFilters } = useContext(BuilderContext);

  const updateFilters = useCallback(
    (filter: Partial<Filters>) => {
      if (setFilters) {
        setFilters(prev => ({ ...prev, ...filter }));
      }
    },
    [setFilters],
  );

  return updateFilters;
}
