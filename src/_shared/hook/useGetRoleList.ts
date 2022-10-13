import { Roles } from '../types';

export function useGetRoleList() {
  const roleList: Roles[] = ['GK', 'DE', 'CM', 'ST'];
  return roleList;
}
