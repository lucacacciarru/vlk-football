import {
  render,
  fireEvent,
  screen,
} from '../../../_shared/testConfig/customRender';
import { Player } from '../../../_shared/types';
import { BuilderGameState, MatchTeams } from '../../store/types';
import { ListCardPlayer } from './ListCardPlayer';

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
    selectedPlayers: [],
  },
  teams: MOCK_TEAMS,
  date: '',
  place: '',
  matchType: 'three',
};

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_PLAYERS: Player[] = [
  {
    goalkeeper: true,
    id: '1',
    name: 'anyName',
    rating: 8,
    possibleMatchTypes: {
      football: false,
      futsal: true,
      seven: false,
      three: true,
    },
  },
  {
    goalkeeper: true,
    id: '2',
    name: 'test',
    rating: 8,
    possibleMatchTypes: {
      football: false,
      futsal: true,
      seven: false,
      three: true,
    },
  },
];

describe('ListCardPlayer component', () => {
  test('Should be rendered', () => {
    mockFetch(MOCK_PLAYERS);
    render(<ListCardPlayer id="1" />, {
      mocks: { builderGame: MOCK_BUILDER_STATE },
    });
    const playerCard = screen.getByTestId('1');
    fireEvent.click(playerCard);
  });
});
