import { previousRoutesMap } from '../../_shared/const';

export function getPreviouslyRoute(pathname: string) {
  if (!previousRoutesMap[pathname]) {
    return -1;
  }

  return previousRoutesMap[pathname].previousRoute;
}
