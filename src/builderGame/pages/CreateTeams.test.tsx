import { Player } from '../../player/store';
import {
  render,
  waitFor,
  screen,
  fireEvent,
} from '../../_shared/testConfig/customRender';
import { BuilderGameState } from '../store/types';
import { CreateTeams } from './CreateTeams';
import * as reactRouter from 'react-router';
import * as useBuilderGame from '../hook/useBuilderGame';
import * as generateTeams from '../utils/generatesBalancedTeams';

function mockFetch(body?: Object) {
  fetchMock.resetMocks();
  fetchMock.mockResponse(JSON.stringify(body || {}));
}

const MOCK_PLAYER: Player[] = [
  {
    goalkeeper: true,
    id: '1',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: true,
    id: '2',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '3',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '4',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '5',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '6',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '7',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '8',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '9',
    name: 'anyName',
    rating: 8,
  },
  {
    goalkeeper: false,
    id: '10',
    name: 'anyName',
    rating: 8,
  },
];

const MOCK_BUILDER_STATE: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  },
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
  date: '',
  place: '',
};

describe('CreateTeams page', () => {
  test('Should be rendered', async () => {
    mockFetch(MOCK_PLAYER);
    render(<CreateTeams />, { mocks: { builderGame: MOCK_BUILDER_STATE } });
    await waitFor(() => {
      const draggablePlayer = screen.getByTestId('1');
      const draggablePlayer2 = screen.getByTestId('2');
      expect(draggablePlayer).toBeInTheDocument();
      expect(draggablePlayer2).toBeInTheDocument();
    });
  });
  test('if button is not disabled and clicked, different function should be called', async () => {
    const useNavigateSpy = jest
      .spyOn(reactRouter, 'useNavigate')
      .mockImplementation(jest.fn);
    const useCreateTeamsSpy = jest
      .spyOn(useBuilderGame, 'useCreateTeams')
      .mockImplementation(jest.fn);
    const useGenerateTeamSpy = jest
      .spyOn(generateTeams, 'generatesBalancedTeams')
      .mockImplementation(jest.fn());
    mockFetch(MOCK_PLAYER);

    render(<CreateTeams />, { mocks: { builderGame: MOCK_BUILDER_STATE } });
    const button = screen.getByTestId('createTeamButton');

    await waitFor(() => {
      expect(button).not.toBeDisabled();
      fireEvent.click(button);
      expect(useNavigateSpy).toBeCalled();
      expect(useCreateTeamsSpy).toBeCalled();
      expect(useGenerateTeamSpy).toBeCalled();
    });
  });
});
