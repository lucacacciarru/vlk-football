import { render } from '../../_shared/testConfig/customRender';
import { BuilderGameState, MatchTeams } from '../store/types';
import { CreateTeam } from './CreateTeam';

const MOCK_TEAMS: MatchTeams = {
  klv: {
    players: ['1'],
    ratingsScore: 8,
  },
  vlk: {
    players: ['2'],
    ratingsScore: 8,
  },
};

const MOCK_BUILDER_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: ['1', '2'],
  },
  teams: MOCK_TEAMS,
  date: '',
  place: '',
  matchType: 'futsal',
};

describe('CreateTeam page', () => {
  test('Should be rendered', () => {
    render(<CreateTeam />, {
      mocks: {
        builderGame: MOCK_BUILDER_STATE,
      },
    });
  });
});
