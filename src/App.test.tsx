import App from './App';
import { Player } from './player/store';
import { render, screen, waitFor } from './_shared/testConfig/customRender';

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
  },
];

describe('App', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYERS);
    render(<App />);
    await waitFor(() => {
      const playerCard = screen.getByTestId('player1');
      expect(playerCard).toBeInTheDocument();
    });
  });
});
