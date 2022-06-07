import { UniqueIdentifier } from '@dnd-kit/core';
import { ColumnList } from '../types';

export function findContainer(id: UniqueIdentifier, columnList: ColumnList) {
  if (id in columnList) {
    return id;
  }

  return Object.keys(columnList).find(key =>
    columnList[key as keyof ColumnList].includes(id as string),
  );
}
