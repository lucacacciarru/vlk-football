export function arrayToObjectById<T extends { id: string }>(array: T[]) {
  return array.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item,
    }),
    {}
  );
}
