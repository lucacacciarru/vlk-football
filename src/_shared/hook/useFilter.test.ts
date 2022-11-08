import { renderHook, act } from '../testConfig/customRenderHook';
import { MatchType, Roles } from '../types';
import { useFilter } from './useFilter';

const mockRoleValue: Roles = 'GK';
const mockMatchTypeValue: MatchType = 'football';

describe('useFilter hook', () => {
  test('If updatedFilterList is called, the list of selected filter should change ', () => {
    const { result } = renderHook(() => useFilter());
    act(() => {
      result.current.updateFilterList('roles', [mockRoleValue]);
    });
    expect(result.current.roles).toEqual([mockRoleValue]);
  });
  test('If addFilterValue is called, a value should be added to the selected filter', () => {
    const { result } = renderHook(() => useFilter());
    act(() => {
      result.current.addFilterValue('matchType', mockMatchTypeValue);
    });
    expect(result.current.matchType).toContain(mockMatchTypeValue);
  });
  test('If generateValidFilterList is called, it should return a list of object that contains the populated filters ', () => {
    const { result } = renderHook(() => useFilter());
    act(() => {
      result.current.addFilterValue('roles', mockRoleValue);
    });
    const populatedFilterList = result.current.generateValidFilterList({
      excludedFilterKey: ['matchType'],
    });

    expect(populatedFilterList).toContainEqual({
      name: 'roles',
      value: mockRoleValue,
    });
  });
  test('If removeFilterValue is called, it should remove an existing value of a specific filter', () => {
    const { result } = renderHook(() => useFilter());
    act(() => {
      result.current.addFilterValue('roles', mockRoleValue);
    });
    expect(result.current.roles).toContain(mockRoleValue);

    act(() => {
      result.current.removeFilterValue('roles', mockRoleValue);
    });
    expect(result.current.roles).not.toContain(mockRoleValue);
  });
});
