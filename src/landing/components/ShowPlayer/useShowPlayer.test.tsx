import { renderHook } from '../../../_shared/testConfig/customRenderHook';
import { Player } from '../../../_shared/types';
import { useShowPlayer } from './useShowPlayer';

const players: Player[] = [
  {
    roles: {
      CM: true,
      DE: true,
      GK: false,
      ST: false,
    },
    id: 'anyid',
    name: 'Test',
    rating: 12,
    possibleMatchTypes: {
      football: false,
      futsal: false,
      seven: false,
      three: false,
    },
  },
];

describe('useShowPlayer hook', () => {
  test('If hook attributes is not undefined, renderPlayers should contains JSX element', () => {
    const { result } = renderHook(() => useShowPlayer(players));
    expect(result.current.renderPlayers).not.toBeUndefined();
  });
});
