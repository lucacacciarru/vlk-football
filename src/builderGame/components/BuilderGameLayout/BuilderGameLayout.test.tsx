import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../_shared/testConfig/customRender';
import { BuilderGameLayout } from './BuilderGameLayout';
import { createMemoryHistory } from 'history';
import { PATHS } from '../../../_shared/types';
import { BuilderGameState } from '../../store/types';

const BUILDER_GAME_MOCK: BuilderGameState = {
  chosenPlayers: {
    selectedPlayers: [],
  },
  date: 'anyString',
  place: 'anyString',
  matchType: 'futsal',
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
};

describe('BuilderGameLayout component', () => {
  test('Should be rendered', async () => {
    const history = createMemoryHistory({
      initialEntries: [`/${PATHS.CREATE_TEAM}`],
    });
    render(<BuilderGameLayout />, { history });
    const backButton = screen.getByTestId('backButton');
    fireEvent.click(backButton);
    waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
  test('Should be rendered', async () => {
    const history = createMemoryHistory({
      initialEntries: [`/${PATHS.PRE_MATCH}`],
    });
    render(<BuilderGameLayout />, {
      history,
      mocks: {
        builderGame: BUILDER_GAME_MOCK,
      },
    });

    expect(history.location.pathname).toBe(`/${PATHS.CREATE_TEAM}`);
  });
});
