import { PreviousMatchesList } from '..';
import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
import { Match } from '../../store';

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
      klv: { players: [], ratingsScore: 0 },
      vlk: { players: [], ratingsScore: 0 },
    },
  },
];

describe('PreviousMatchesList component', () => {
  mockFetch(MOCK_MATCHES);
  test('Should be rendered', async () => {
    render(<PreviousMatchesList />);
    waitFor(() => {
      const matchCards = screen.getAllByRole('matchCard');
      expect(matchCards).toBeInTheDocument();
    });
  });
});
