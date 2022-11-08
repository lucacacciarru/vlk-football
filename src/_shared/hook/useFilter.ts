import { useCallback, useContext } from 'react';
import { BuilderContext } from '../components/FiltersContext';
import { Filters } from '../types';

export function useFilter() {
  const { setFilters, filters } = useContext(BuilderContext);

  const updateFilterList = useCallback(
    (filterKey: Partial<keyof Filters>, value: string[] | number[]) => {
      if (setFilters) {
        setFilters(prev => ({ ...prev, [filterKey]: value }));
      }
    },
    [setFilters],
  );

  const addFilterValue = useCallback(
    (filterKey: Partial<keyof Filters>, value: string | number) => {
      if (setFilters) {
        setFilters(prev => {
          const selectedFilterValue = prev[filterKey];
          return {
            ...prev,
            [filterKey]: [...selectedFilterValue, value],
          };
        });
      }
    },
    [setFilters],
  );

  const excludedFilter = useCallback(
    ({ excludedFilterKey }: { excludedFilterKey: (keyof Filters)[] }) => {
      const filterList = Object.keys(filters);
      return filterList.filter(
        key => !excludedFilterKey.includes(key as keyof Filters),
      );
    },
    [filters],
  );

  const getValidFilterKeys = useCallback(
    ({ excludedFilterKey }: { excludedFilterKey: (keyof Filters)[] }) => {
      const selectedFilters = excludedFilter({ excludedFilterKey });
      return selectedFilters.filter(
        filterKey => filters[filterKey as keyof Filters].length > 0,
      );
    },
    [excludedFilter, filters],
  );

  const generateValidFilterList = useCallback(
    ({ excludedFilterKey }: { excludedFilterKey: (keyof Filters)[] }) => {
      const filterList: { name: keyof Filters; value: string | number }[] = [];

      const validFilterKeys = getValidFilterKeys({ excludedFilterKey });
      validFilterKeys.forEach(filterKey => {
        const selectedFilterValue = filters[filterKey as keyof Filters];
        selectedFilterValue.forEach(value => {
          filterList.push({ name: filterKey as keyof Filters, value });
        });
      });

      return filterList;
    },
    [filters, getValidFilterKeys],
  );

  const checkIfValueIsOnFilters = useCallback(
    (filterKey: Partial<keyof Filters>, value: string | number) => {
      if (filters) {
        return filters[filterKey]?.includes(value as never);
      }
    },
    [filters],
  );

  const removeFilterValue = useCallback(
    (filterKey: keyof Filters, value: string | number) => {
      if (setFilters) {
        setFilters(prev => {
          const selectedFilter = prev[filterKey];
          const filteredValueList = (selectedFilter as unknown[]).filter(
            item => item !== value,
          );
          return {
            ...prev,
            [filterKey]: filteredValueList,
          };
        });
      }
    },
    [setFilters],
  );

  return {
    updateFilterList,
    addFilterValue,
    checkIfValueIsOnFilters,
    generateValidFilterList,
    removeFilterValue,
    ...filters,
  };
}
