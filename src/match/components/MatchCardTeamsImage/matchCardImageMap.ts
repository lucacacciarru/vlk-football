import { MatchType } from '../../../_shared/types';
import footballCover from './assets/football.jpeg';
import futsalCover from './assets/futsal.jpeg';
import sevenCover from './assets/seven.jpeg';
import threeCover from './assets/three.jpeg';

type ImageProps = {
  coverUrl: string;
};

export const matchCardImageMap: Record<MatchType, ImageProps> = {
  football: {
    coverUrl: footballCover,
  },
  futsal: {
    coverUrl: futsalCover,
  },
  seven: {
    coverUrl: sevenCover,
  },
  three: {
    coverUrl: threeCover,
  },
};
