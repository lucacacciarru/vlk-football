import { render } from '../../_shared/testConfig/customRender';
import { Match } from '../store';
import { MatchInfo } from './MatchInfo';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_MATCH: Match[] = [
  {
    date: 'anyString',
    id: '1',
    place: 'anyString',
    matchType: 'football',
    teams: {
      vlk: {
        players: [],
        ratingsScore: 0,
      },
      klv: {
        players: [],
        ratingsScore: 0,
      },
    },
  },
];

describe('MatchInfo page', () => {
  test('Should be rendered', () => {
    mockFetch(MOCK_MATCH);

    render(<MatchInfo />);
  });
});
