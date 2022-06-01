export type Player = {
  id: string;
  name: string;
  rating: 4 | 8 | 12 | 16;
  goalkeeper: boolean;
  sports?: string[];
  avatar?: string;
  description?: string;
};
