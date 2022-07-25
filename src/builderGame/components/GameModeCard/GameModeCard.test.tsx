import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { BuilderGameState } from '../../store/types';
import { GameModeCard } from './GameModeCard';

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

describe('GameModeCard component', () => {
  test('Should be rendered', () => {
    render(<GameModeCard gameMode="football" />, {
      mocks: { builderGame: BUILDER_GAME_MOCK },
    });
    const gameModeCard = screen.getByTestId('gameModeCard-football');
    fireEvent.click(gameModeCard);
  });
});
