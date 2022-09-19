import { PATHS } from '../types';

type PreviousRoute = {
  previousRoute: string;
};

export const previousRoutesMap: Record<string, PreviousRoute> = {
  '/pre-match': {
    previousRoute: PATHS.CREATE_TEAM,
  },
  '/select-mode': {
    previousRoute: PATHS.INDEX,
  },
};
