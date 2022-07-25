import { PATHS } from '../types';

type PreviousRoute = {
  previousRoute: string;
};

export const previousRoutesMap: Record<string, PreviousRoute> = {
  '/create-team': {
    previousRoute: PATHS.SELECT_MODE,
  },
  '/pre-match': {
    previousRoute: PATHS.CREATE_TEAM,
  },
  '/select-mode': {
    previousRoute: PATHS.INDEX,
  },
};
