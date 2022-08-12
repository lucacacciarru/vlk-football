import { renderHook, waitFor } from '../../_shared/testConfig/customRenderHook';
import { Player } from '../../_shared/types';
import { BuilderGameState } from '../store/types';
import { useSelectedPlayers } from './useSelectedPlayers';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_PLAYER: Player = {
  goalkeeper: true,
  id: '1',
  name: 'anyName',
  rating: 8,
  possibleMatchTypes: {
    football: false,
    futsal: false,
    seven: false,
    three: false,
  },
};

const MOCK_BUILDER_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: ['1'],
  },
  teams: {
    klv: {
      players: [],
      ratingsScore: 0,
    },
    vlk: {
      players: [],
      ratingsScore: 0,
    },
  },
  matchType: 'futsal',
  date: '',
  place: '',
};

describe('useSelectedPlayers', () => {
  test('should return players', async () => {
    mockFetch([MOCK_PLAYER]);

    const { result } = renderHook(() => useSelectedPlayers(), {
      mocks: {
        builderGame: MOCK_BUILDER_STATE,
      },
    });
    await waitFor(() => {
      expect(result.current).toHaveLength(1);
    });
  });
});
