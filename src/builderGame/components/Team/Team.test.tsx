import { Player } from '../../../player/store';
import { render } from '../../../_shared/testConfig/customRender';
import { ContainerTeams } from '../ContainerTeams';

function mockFetch(response?: Object) {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify(response || {}),
    }),
  );
}

const MOCK_PLAYER: Player = {
  goalkeeper: true,
  id: '1',
  name: 'anyName',
  rating: 8,
};

describe('Team component', () => {
  test('Should be rendered', async () => {
    mockFetch([[MOCK_PLAYER]]);
    render(<ContainerTeams />, {
      mocks: {
        builderGame: {
          chosenPlayers: {
            availablePlayers: [],
            selectedPlayers: [],
          },
          match: {
            vlk: { players: ['1'], ratingsScore: 0 },
            klv: { players: [], ratingsScore: 0 },
          },
        },
      },
    });
  });
});
