import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
import { Player } from '../../../_shared/types';
import { BuilderGameState } from '../../store/types';
import { PlayerList } from './PlayerList';

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
      futsal: false,
      seven: false,
      three: false,
    },
  },
  {
    goalkeeper: true,
    id: '2',
    name: 'test',
    rating: 8,
    possibleMatchTypes: {
      football: false,
      futsal: false,
      seven: false,
      three: false,
    },
  },
];

const MOCK_BUILDER_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: ['1', '2'],
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

describe('PlayerList component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYERS);
    render(<PlayerList />, {
      mocks: { builderGame: MOCK_BUILDER_STATE },
    });
    await waitFor(() => {
      const draggablePlayerName = screen.getByTestId('anyName');
      expect(draggablePlayerName).toBeInTheDocument();
    });
  });
});
