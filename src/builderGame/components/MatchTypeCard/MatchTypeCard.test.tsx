import {
  render,
  screen,
  fireEvent,
} from '../../../_shared/testConfig/customRender';
import { BuilderGameState } from '../../store/types';
import { MatchTypeCard } from './MatchTypeCard';

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

describe('MatchTypeCard component', () => {
  test('Should be rendered', () => {
    render(<MatchTypeCard matchType="football" />, {
      mocks: { builderGame: BUILDER_GAME_MOCK },
    });
    const matchCard = screen.getByTestId('matchTypeCard-football');
    fireEvent.click(matchCard);
  });
});
