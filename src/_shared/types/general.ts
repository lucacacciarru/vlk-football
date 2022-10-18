export type TeamsName = 'vlk' | 'klv';

export type MatchType = 'football' | 'futsal' | 'seven' | 'three';
export type Roles = 'GK' | 'DE' | 'CM' | 'ST';

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
  matchType: string[];
  ratings: number[];
  roles: string[];
  name: string[];
};
