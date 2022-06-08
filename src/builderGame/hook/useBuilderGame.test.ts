import { useSelector } from 'react-redux';
import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import { getChosenPlayers, getTeams } from '../store/selectors';
import { MatchTeams } from '../store/types';
import { useCreateTeams, useUpdateChosenPlayers } from './useBuilderGame';

function useTestHook() {
  const updateChosenPlayers = useUpdateChosenPlayers();
  const createTeams = useCreateTeams();
  const chosenPlayers = useSelector(getChosenPlayers);
  const teams = useSelector(getTeams);

  return {
    updateChosenPlayers,
    createTeams,
    chosenPlayers,
    teams,
  };
}

const MOCK_CHOSEN_PLAYERS = {
  availablePlayers: ['1'],
  selectedPlayers: ['2'],
};

const MOCK_TEAMS: MatchTeams = {
  klv: {
    players: ['1'],
    ratingsScore: 8,
  },
  vlk: {
    players: ['2'],
    ratingsScore: 12,
  },
};

describe('useBuilderGame hook', () => {
  test('Should update chosenPlayer', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => {
      result.current.updateChosenPlayers(MOCK_CHOSEN_PLAYERS);
    });
    expect(result.current.chosenPlayers).toEqual(MOCK_CHOSEN_PLAYERS);
  });
  test('Should update teams', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => {
      result.current.createTeams(MOCK_TEAMS);
    });
    expect(result.current.teams).toEqual(MOCK_TEAMS);
  });
});
