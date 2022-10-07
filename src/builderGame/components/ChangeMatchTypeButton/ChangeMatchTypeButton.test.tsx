import {
  fireEvent,
  render,
  screen,
} from '../../../_shared/testConfig/customRender';
import { BuilderGameState, MatchTeams } from '../../store/types';
import { ChangeMatchTypeButton } from './ChangeMatchTypeButton';

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
    selectedPlayers: ['1', '2', '3', '4', '5', '6', '7'],
  },
  teams: MOCK_TEAMS,
  date: '',
  place: '',
  matchType: 'futsal',
};

const fn = jest.fn();

describe('ChangeMatchTypeButton component', () => {
  test('If the selected player are more than the maximum player of the selected match type, an alert should be render', async () => {
    render(
      <ChangeMatchTypeButton
        activeMatchType="three"
        onClose={fn}
        data-testid="changeMatchTypeButton"
      />,
      {
        mocks: { builderGame: MOCK_BUILDER_STATE },
      },
    );
    const button = screen.getByTestId('changeMatchTypeButton');
    fireEvent.click(button);
    const alert = screen.getByTestId('changeMatchTypeAlert');
    expect(alert).toBeInTheDocument();
  });
});
