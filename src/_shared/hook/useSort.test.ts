import { act, renderHook } from '../testConfig/customRenderHook';
import { Sort } from '../types';
import { useSort } from './useSort';

const mockSortValue: Sort = 'ratingAsc';

describe('useSort hook', () => {
  test('if updateSort is called, it should change the value of sort', () => {
    const { result } = renderHook(() => useSort());
    act(() => {
      result.current.updateSort(mockSortValue);
    });
    expect(result.current.sort).toEqual(mockSortValue);
  });
});
