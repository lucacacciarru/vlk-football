import { render, screen } from '../../../_shared/testConfig/customRender';
import { BuilderGameState } from '../../store/types';
import { SelectModeButton } from './SelectModeButton';

const BUILDER_GAME_MOCK: BuilderGameState = {
  chosenPlayers: {
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
};

describe('SelectModeButton component', () => {
  test('Should be rendered', () => {
    render(<SelectModeButton />, { mocks: { builderGame: BUILDER_GAME_MOCK } });
    const linkButton = screen.getByTestId('LinkButton');
    expect(linkButton).toBeDisabled();
  });
});
