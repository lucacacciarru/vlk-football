import { render, waitFor, screen } from '../../_shared/testConfig/customRender';
import { Player } from '../../_shared/types';
import { BuilderGameState } from '../store/types';
import { PreMatch } from './PreMatch';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

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

const MOCK_BUILDER_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: [],
  },
  teams: {
    klv: {
      players: ['1'],
      ratingsScore: 0,
    },
    vlk: {
      players: ['2'],
      ratingsScore: 0,
    },
  },
  matchType: 'futsal',
  date: '',
  place: '',
};

describe('PreMatch page', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYER);
    render(<PreMatch />, { mocks: { builderGame: MOCK_BUILDER_STATE } });
    await waitFor(() => {
      const draggablePlayer = screen.getByTestId('1');
      const draggablePlayer2 = screen.getByTestId('2');
      expect(draggablePlayer).toBeInTheDocument();
      expect(draggablePlayer2).toBeInTheDocument();
    });
  });
});
