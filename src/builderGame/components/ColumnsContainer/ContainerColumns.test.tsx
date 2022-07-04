import { Player } from '../../../player/store';
import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
import { BuilderGameState } from '../../store/types';
import { ColumnsContainer } from './ContainerColumns';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

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
  date: '',
  place: '',
};

describe('ContainerColumns component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYER);
    render(<ColumnsContainer />, {
      mocks: { builderGame: MOCK_BUILDER_STATE },
    });

    await waitFor(() => {
      const draggablePlayer = screen.getByTestId('1');
      expect(draggablePlayer).toBeInTheDocument();
    });
  });
});
