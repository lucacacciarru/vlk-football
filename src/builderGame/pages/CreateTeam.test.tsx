import { render } from '../../_shared/testConfig/customRender';
import { Player } from '../../_shared/types';
import { BuilderGameState, MatchTeams } from '../store/types';
import { CreateTeam } from './CreateTeam';
function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_PLAYERS: Player[] = [
  {
    id: '1',
    roles: {
      CM: true,
      DE: true,
      GK: false,
      ST: false,
    },
    name: 'Test',
    rating: 8,
    possibleMatchTypes: {
      football: false,
      futsal: false,
      seven: false,
      three: false,
    },
  },
];

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

describe('CreateTeam page', () => {
  test('Should be rendered', () => {
    mockFetch(MOCK_PLAYERS);
    render(<CreateTeam />, {
      mocks: {
        builderGame: MOCK_BUILDER_STATE,
      },
    });
  });
});
