import { render } from '../../../_shared/testConfig/customRender';
import { Match } from '../../store';
import { MatchDetails } from './MatchDetails';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_MATCH: Match[] = [
  {
    date: 'anyString',
    id: '1',
    place: 'anyString',
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

describe('MatchDetails component', () => {
  test('Should be rendered', () => {
    mockFetch(MOCK_MATCH);
    render(<MatchDetails />);
  });
});
