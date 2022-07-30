import { Player } from '../../../player/store';
import {
  render,
  screen,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { MatchCard } from './MatchCard';

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
  {
    id: '2',
    goalkeeper: false,
    name: 'Another Test',
    rating: 8,
  },
];

describe('MatchCard component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYERS);
    render(
      <MatchCard
        id="anyId"
        date="5 Giugno"
        place="Cagliari"
        matchType="football"
        teams={{
          klv: {
            players: ['1'],
            ratingsScore: 20,
          },
          vlk: {
            players: ['2'],
            ratingsScore: 25,
          },
        }}
      />,
    );
    waitFor(() => {
      const avatar = screen.getByTestId('avatar1');
      expect(avatar).toBeInTheDocument();
    });
  });
});
