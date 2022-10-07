import { useContext } from 'react';
import { BuilderContext } from '../components/FiltersContext';

export function useFilter() {
  const { setFilters } = useContext(BuilderContext);

  // const updateFilters = useCallback(
  //   (filter: Partial<keyof Filters>) => {
  //     if (setFilters) {
  //       setFilters(prev => ({ ...prev, [filter] : {} }));
  //     }
  //   },
  //   [setFilters],
  // );

  return { setFilters };
}
