import { Player } from '../../../player/store';
import {
  render,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
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
