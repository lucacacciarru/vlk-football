import { createMemoryHistory } from 'history';
import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { PATHS } from '../../../_shared/types';
import { Match } from '../../store';
import { ReplayMatchButton } from './ReplayMatchButton';

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

describe('ReplayMatchButton component', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_MATCH);
    const pathMatch = createMemoryHistory({
      initialEntries: [`${PATHS.MATCHES}/1`],
    });
    render(<ReplayMatchButton />, {
      history: pathMatch,
    });
    const button = screen.getByTestId('replayButton');
    fireEvent.click(button);
  });
});
