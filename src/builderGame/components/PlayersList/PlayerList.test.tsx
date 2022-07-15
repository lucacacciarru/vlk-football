import { Player } from '../../../player/store';
import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
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
  },
  {
    goalkeeper: true,
    id: '2',
    name: 'test',
    rating: 8,
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
  selectedSport: 'futsal',
  date: '',
  place: '',
};

describe('PlayerList component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYERS);
    render(<PlayerList id="selectedPlayers" items={['1']} />, {
      mocks: { builderGame: MOCK_BUILDER_STATE },
    });
    await waitFor(() => {
      const draggablePlayerName = screen.getByTestId('anyName');
      expect(draggablePlayerName).toBeInTheDocument();
    });
  });
});
