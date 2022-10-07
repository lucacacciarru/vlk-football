import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useGetMatchType } from '../../../builderGame/hook';
import { Filters } from '../../types';

type ContentContext = {
  setFilters?: Dispatch<SetStateAction<Partial<Filters> | undefined>>;
} & Partial<Filters>;

export const BuilderContext = createContext<ContentContext>({});

export const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const selectedMatchType = useGetMatchType();
  const [filters, setFilters] = useState<Partial<Filters>>();

  useEffect(() => {
    setFilters(prev => ({ ...prev, matchType: [selectedMatchType] }));
  }, [selectedMatchType]);

  return (
    <BuilderContext.Provider value={{ setFilters, ...filters }}>
      {children}
    </BuilderContext.Provider>
  );
};
