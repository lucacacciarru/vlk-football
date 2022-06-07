import { ColumnList } from '../types';
import { findContainer } from './findContainer';

const mock_columnList: ColumnList = {
  availablePlayers: ['1', '2'],
  selectedPlayers: ['3'],
};

describe('findContainer function', () => {
  test('If the fist parameter is a id inside one column, it should return the container key', () => {
    const test = findContainer('1', mock_columnList);
    expect(test).toBe('availablePlayers');
  });
  test('If the fist parameter column id, it should return the same id', () => {
    const test = findContainer('availablePlayers', mock_columnList);
    expect(test).toBe('availablePlayers');
  });
});
