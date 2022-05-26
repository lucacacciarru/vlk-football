export function removeSameElementInTwoList<T>(firstList: T[], secondList: T[]) {
  return firstList.filter((el) => !secondList.includes(el));
}
