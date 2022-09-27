import { PATHS } from '../types';

type PreviousRoute = {
  previousRoute: string;
};

export const previousRoutesMap: Record<string, PreviousRoute> = {
  '/pre-match': {
    previousRoute: PATHS.CREATE_TEAM,
  },
  '/create-team': {
    previousRoute: PATHS.INDEX,
  },
};
