import { useGetMatchesQuery } from '../store';

export function useGetSingleMatch(id: string) {
  const { match } = useGetMatchesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      match: data?.find(match => match.id === id),
    }),
  });
  return match;
}
