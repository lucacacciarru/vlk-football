import { Player } from '../types';

export function useGetRatingList() {
  const ratingList: Player['rating'][] = [4, 8, 12, 16];
  return ratingList;
}
