import { Sports } from '../../_shared/types';

export type Player = {
  id: string;
  name: string;
  rating: 4 | 8 | 12 | 16;
  goalkeeper: boolean;
  sports?: Sports[];
  avatar?: string;
  description?: string;
};
