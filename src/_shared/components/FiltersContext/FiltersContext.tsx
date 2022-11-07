import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { useGetMatchType } from '../../../builderGame/hook';
import { Filters, Sort } from '../../types';

type ContentContext = {
  setFilters?: Dispatch<SetStateAction<Filters>>;
  setSort?: Dispatch<SetStateAction<Sort>>;
  filters: Filters;
  sort: Sort;
};

export const BuilderContext = createContext<ContentContext>({
  filters: { matchType: [], name: [], ratings: [], roles: [] },
  sort: 'nameAsc',
});

export const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const selectedMatchType = useGetMatchType();
  const [filters, setFilters] = useState<Filters>({
    matchType: [selectedMatchType],
    name: [],
    ratings: [],
    roles: [],
  });
  const [sort, setSort] = useState<Sort>('nameAsc');

  return (
    <BuilderContext.Provider value={{ setFilters, setSort, filters, sort }}>
      {children}
    </BuilderContext.Provider>
  );
};
