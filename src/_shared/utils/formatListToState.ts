import { arrayToObjectById } from "./arrayToObjectById";

export function formatListToState<T extends { id: string }>(list: T[]) {
  const allIds = list.map((item) => item.id);
  const byId = arrayToObjectById(list);
  return {
    allIds,
    byId,
  };
}
