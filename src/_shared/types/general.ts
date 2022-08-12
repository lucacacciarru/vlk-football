export type TeamsName = 'vlk' | 'klv';

export type MatchType = 'football' | 'futsal' | 'seven' | 'three';

export type Player = {
  id: string;
  name: string;
  rating: 4 | 8 | 12 | 16;
  goalkeeper: boolean;
  possibleMatchTypes: Record<MatchType, boolean>;
  avatar?: string;
  description?: string;
};
