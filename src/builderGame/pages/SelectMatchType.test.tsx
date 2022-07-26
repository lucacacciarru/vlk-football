import { SelectMatchType } from './SelectMatchType';
import { render } from '../../_shared/testConfig/customRender';
import { BuilderGameState } from '../store/types';

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

describe('SelectMode container', () => {
  test('Should be rendered', () => {
    render(<SelectMatchType />, {
      mocks: {
        builderGame: BUILDER_GAME_MOCK,
      },
    });
  });
});
