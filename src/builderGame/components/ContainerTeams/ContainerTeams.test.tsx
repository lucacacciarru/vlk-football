import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
import { Player } from '../../../_shared/types';
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
  matchType: 'futsal',
};

const MOCK_PLAYER: Player[] = [
  {
    roles: {
      CM: true,
      DE: true,
      GK: false,
      ST: false,
    },
    id: '1',
    name: 'anyName',
    rating: 8,
    possibleMatchTypes: {
      football: false,
      futsal: false,
      seven: false,
      three: false,
    },
  },
  {
    roles: {
      CM: true,
      DE: true,
      GK: false,
      ST: false,
    },
    id: '2',
    name: 'anyName',
    rating: 8,
    possibleMatchTypes: {
      football: false,
      futsal: false,
      seven: false,
      three: false,
    },
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
