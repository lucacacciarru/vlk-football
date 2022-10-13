import App from './App';
import { render, screen, waitFor } from './_shared/testConfig/customRender';
import { Player } from './_shared/types';

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
