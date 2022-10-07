export type TeamsName = 'vlk' | 'klv';

export type MatchType = 'football' | 'futsal' | 'seven' | 'three';
export type StringRating = '4' | '8' | '12' | '16';
export type Roles = 'GK' | 'DE' | 'CM' | 'ST';

type SingleFilterMap<T extends string> = Record<T, boolean>;

export type Player = {
  id: string;
  name: string;
  rating: 4 | 8 | 12 | 16;
  roles: Record<Roles, boolean>;
  possibleMatchTypes: Record<MatchType, boolean>;
  avatar?: string;
  description?: string;
};

export type Filters = {
  matchType: SingleFilterMap<MatchType>;
  ratings: SingleFilterMap<StringRating>;
  roles: Player['roles'];
  name: string;
};
