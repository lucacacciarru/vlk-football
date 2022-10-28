import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { useGetMatchType } from '../../../builderGame/hook';
import { Filters } from '../../types';

type ContentContext = {
  setFilters?: Dispatch<SetStateAction<Filters>>;
  filters: Partial<Filters>;
};

export const BuilderContext = createContext<ContentContext>({ filters: {} });

export const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const selectedMatchType = useGetMatchType();
  const [filters, setFilters] = useState<Filters>({
    matchType: [selectedMatchType],
    name: [],
    ratings: [],
    roles: [],
  });

  return (
    <BuilderContext.Provider value={{ setFilters, filters }}>
      {children}
    </BuilderContext.Provider>
  );
};
