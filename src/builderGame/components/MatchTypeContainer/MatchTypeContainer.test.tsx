import { render } from '../../../_shared/testConfig/customRender';
import { BuilderGameState } from '../../store/types';
import { MatchTypeContainer } from './MatchTypeContainer';

const BUILDER_GAME_MOCK: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: [],
  },
  date: 'anyString',
  place: 'anyString',
  teams: {
    klv: {
      players: [],
      ratingsScore: 0,
    },
    vlk: {
      players: [],
      ratingsScore: 0,
    },
  },
  matchType: 'futsal',
};

describe('GameModeContainer component', () => {
  test('Should be rendered', () => {
    render(<MatchTypeContainer />, {
      mocks: { builderGame: BUILDER_GAME_MOCK },
    });
  });
});
