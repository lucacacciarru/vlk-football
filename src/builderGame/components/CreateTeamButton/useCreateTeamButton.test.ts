import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
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
  teams: {
    klv: { players: [], ratingsScore: 0 },
    vlk: { players: [], ratingsScore: 0 },
  },
};

function useTestHook() {
  const location = useLocation();
  const teams = useSelector(getTeams);

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

    await waitFor(() => {
      result.current.createTeams();
      expect(result.current.location.pathname).toEqual(`/${PATHS.PRE_MATCH}`);
    });
  });

  describe('when players are received', () => {
    it('should create 2 teams', async () => {
      mockFetch([
        {
          id: '1',
          name: 'John Doe',
          rating: 8,
          goalkeeper: false,
          description: 'any string',
          avatar: 'any image url',
        },
        {
          id: '2',
          name: 'Jane Smith',
          rating: 8,
          goalkeeper: false,
          description: 'any string',
          avatar: 'any image url',
        },
      ]);

      const { result } = renderHook(() => useTestHook(), {
        mocks: {
          builderGame: MOCK_STATE,
        },
      });

      await waitFor(() => {
        result.current.createTeams();
        expect(result.current.teams.klv.players).toHaveLength(1);
        expect(result.current.teams.vlk.players).toHaveLength(1);
      });
    });
  });
});
