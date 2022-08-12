import { render, screen, waitFor } from '../../_shared/testConfig/customRender';
import { Player } from '../../_shared/types';
import { Landing } from './Landing';
function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_PLAYERS: Player[] = [
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

describe('Landing page', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYERS);
    render(<Landing />);
    await waitFor(() => {
      const playerCard = screen.getByTestId('player1');
      expect(playerCard).toBeInTheDocument();
    });
  });
});
