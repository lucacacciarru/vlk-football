import { SelectMode } from './SelectMode';
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
  selectedSport: 'futsal',
};

describe('SelectMode container', () => {
  test('Should be rendered', () => {
    render(<SelectMode />, {
      mocks: {
        builderGame: BUILDER_GAME_MOCK,
      },
    });
  });
});
