import { PATHS } from '../types';

type PreviousRoute = {
  previousRoute: string;
};

export const previousRoutesMap: Record<string, PreviousRoute> = {
  '/create-team': {
    previousRoute: PATHS.INDEX,
  },
  '/pre-match': {
    previousRoute: PATHS.CREATE_TEAM,
  },
};
