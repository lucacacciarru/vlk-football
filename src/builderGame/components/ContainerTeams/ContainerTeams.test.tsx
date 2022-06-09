import { Player } from '../../../player/store';
import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
import { BuilderGameState, MatchTeams } from '../../store/types';
import { ContainerTeams } from './ContainerTeams';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_TEAMS: MatchTeams = {
  klv: {
    players: ['1'],
    ratingsScore: 8,
  },
  vlk: {
    players: ['2'],
    ratingsScore: 8,
  },
};

const MOCK_BUILDER_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: ['1', '2'],
  },
  teams: MOCK_TEAMS,
  date: '',
  place: '',
};

const MOCK_PLAYER: Player[] = [
  {
    goalkeeper: true,
    id: '1',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: true,
    id: '2',
    name: 'anyName',
    rating: 8,
  },
];

describe('ContainerTeams component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYER);
    render(<ContainerTeams />, { mocks: { builderGame: MOCK_BUILDER_STATE } });
    await waitFor(() => {
      const playerCard = screen.getByTestId('1');
      expect(playerCard).toBeInTheDocument();
    });
  });
});
