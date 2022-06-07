import { Player } from '../../../player/store';
import {
  renderHook,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { useTeam } from './useTeam';

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

describe('useTeam hook', () => {
  test('', async () => {
    mockFetch([MOCK_PLAYER]);
    const { result } = renderHook(() =>
      useTeam({
        team: 'vlk',
        teamMaking: {
          players: ['1'],
          ratingsScore: 10,
        },
      }),
    );
    await waitFor(() => {
      expect(result.current.renderPlayers).toHaveLength(1);
    });
  });
});
