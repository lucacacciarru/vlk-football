export type TeamsName = 'vlk' | 'klv';

export type MatchType = 'football' | 'futsal' | 'seven' | 'three';

type SingleFilterMap<T extends string> = Record<T, boolean>;

export type Player = {
  id: string;
  name: string;
  rating: '4' | '8' | '12' | '16';
  goalkeeper: boolean;
  possibleMatchTypes: Record<MatchType, boolean>;
  avatar?: string;
  description?: string;
};

export type Filters = {
  matchType: SingleFilterMap<MatchType>;
  ratings: SingleFilterMap<Player['rating']>;
  role: Player['goalkeeper'];
  name: string;
};
