// import { Player } from '../../../player/store';
import { Player } from '../../../player/store';
import {
  render,
  waitFor,
  screen,
} from '../../../_shared/testConfig/customRender';
import { Team } from './Team';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_PLAYER: Player = {
  goalkeeper: true,
  id: '1',
  name: 'anyName',
  rating: 8,
};

describe('Team component', () => {
  test('Should be rendered', async () => {
    mockFetch([MOCK_PLAYER]);
    render(
      <Team team="klv" teamMaking={{ players: ['1'], ratingsScore: 8 }} />,
    );
    await waitFor(() => {
      const playerCard = screen.getByTestId('1');
      expect(playerCard).toBeInTheDocument();
    });
  });
});
