import {
  render,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { Player } from '../../../_shared/types';
import { ShowPlayer } from './ShowPlayer';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_TEAMS: Player[] = [
  {
    id: '1',
    goalkeeper: false,
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

describe('ShowPlayer component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_TEAMS);
    render(<ShowPlayer />);
    await waitFor(() => {
      const player = screen.getByTestId('player0');
      expect(player).toBeInTheDocument();
    });
  });
});
