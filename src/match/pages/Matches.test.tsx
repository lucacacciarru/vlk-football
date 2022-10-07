import { render, waitFor, screen } from '../../_shared/testConfig/customRender';
import { Match } from '../store';
import { Matches } from './Matches';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_MATCHES: Match[] = [
  {
    date: 'anyString',
    id: '1',
    place: 'anyString',
    matchType: 'football',
    teams: {
      klv: {
        players: ['1'],
        ratingsScore: 0,
      },
      vlk: {
        players: [],
        ratingsScore: 0,
      },
    },
  },
];

describe('Matches page', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_MATCHES);
    render(<Matches />);
    await waitFor(() => {
      const dateLabel = screen.getByTestId('dateLabel');
      expect(dateLabel).toBeInTheDocument();
    });
  });
});
