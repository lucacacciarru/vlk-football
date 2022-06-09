import { Player } from '../../player/store';
import { renderHook, waitFor } from '../../_shared/testConfig/customRenderHook';
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
