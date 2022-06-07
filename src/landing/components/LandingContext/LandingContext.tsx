import { createContext, useState } from 'react';
import { TeamsName } from '../../../_shared/types/general';

type ContentContext = {
  selectedTeam: TeamsName;
  setSelectedTeam: Function;
};

export const LandingContext = createContext<ContentContext>({
  selectedTeam: 'vlk',
  setSelectedTeam: () => {},
});

export const LandingProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamsName>('vlk');

  return (
    <LandingContext.Provider value={{ selectedTeam, setSelectedTeam }}>
      {children}
    </LandingContext.Provider>
  );
};
