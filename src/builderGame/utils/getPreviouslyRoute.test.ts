import { PATHS } from '../../_shared/types';
import { getPreviouslyRoute } from './getPreviouslyRoute';

describe('getPreviouslyRoute function', () => {
  test('If the pathname match with the map, it should return a specific route', () => {
    const pathname = `/${PATHS.PRE_MATCH}`;
    const previousRoute = getPreviouslyRoute(pathname);
    expect(previousRoute).toEqual(PATHS.CREATE_TEAM);
  });
  test('If the pathname does not match with the map, it should return -1', () => {
    const pathname = `/${PATHS.MATCHES}`;
    const previousRoute = getPreviouslyRoute(pathname);
    expect(previousRoute).toBe(-1);
  });
});
