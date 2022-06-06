import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  act,
  waitFor,
  renderHook,
} from '../../../_shared/testConfig/customRenderHook';
import { PATHS } from '../../../_shared/types';
import { getTeams } from '../../store/selectors';
import { BuilderGameState } from '../../store/types';
import { useCreateTeamButton } from './useCreateTeamButton';
import fetchMock from 'jest-fetch-mock';

const MOCK_STATE: BuilderGameState = {
  chosenPlayers: { availablePlayers: [], selectedPlayers: ['1', '2'] },
  match: {
    klv: { players: [], ratingsScore: 0 },
    vlk: { players: [], ratingsScore: 0 },
  },
};

function useTestHook() {
  const location = useLocation();
  const teams = useSelector(getTeams);
  const state = useSelector(state => state);

  console.log(JSON.stringify(state));

  const { createTeams } = useCreateTeamButton();
  return { teams, createTeams, location };
}

function mockFetch(body?: Object) {
  fetchMock.resetMocks();

  fetchMock.mockResponse(JSON.stringify(body || {}));
}

describe('useCreateTeamButton hook', () => {
  test('if createTeams is called, the pathname should be change', async () => {
    mockFetch([]);
    const { result } = renderHook(() => useTestHook(), {
      mocks: {
        builderGame: MOCK_STATE,
      },
    });
    act(() => result.current.createTeams());
    await waitFor(() => {
      expect(result.current.location.pathname).toEqual(`/${PATHS.PRE_MATCH}`);
    });
  });

  describe.only('sticzz', () => {
    beforeAll(() => {
      mockFetch([
        {
          id: '1',
          name: 'Luca Cacciarru',
          rating: 8,
          goalkeeper: false,
          description: '🐺🐺',
          avatar: 'https://avatars.githubusercontent.com/u/86778250?v=4',
        },
        {
          id: '2',
          name: 'Giovanni',
          rating: 8,
          goalkeeper: false,
          description: '🐺🐺',
          avatar: 'https://avatars.githubusercontent.com/u/86778250?v=4',
        },
      ]);
    });
    test('if createTeams is called, ', async () => {
      const { result } = renderHook(() => useTestHook());
      act(() => result.current.createTeams());
      await waitFor(() => {
        expect(result.current.teams.klv.players).toHaveLength(1);
        expect(result.current.teams.vlk.players).toHaveLength(1);
      });
    });
  });
});
