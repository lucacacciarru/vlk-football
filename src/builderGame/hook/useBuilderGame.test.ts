import { useSelector } from 'react-redux';
import { renderHook, act } from '../../_shared/testConfig/customRenderHook';
import {
  getChosenPlayers,
  getDateAndPlaceMatch,
  getMatchType,
  getTeams,
} from '../store/selectors';
import { MatchTeams } from '../store/types';
import { DateAndPlaceMatch } from '../types';
import {
  useCreateTeams,
  useUpdateChosenPlayers,
  useUpdateDateAndPlaceMatch,
  useUpdateMatchType,
} from './useBuilderGame';

function useTestHook() {
  const updateChosenPlayers = useUpdateChosenPlayers();
  const createTeams = useCreateTeams();
  const updateDateAndPlaceMatch = useUpdateDateAndPlaceMatch();
  const chosenPlayers = useSelector(getChosenPlayers);
  const teams = useSelector(getTeams);
  const dateAndPlaceMatch = useSelector(getDateAndPlaceMatch);
  const updateMatchType = useUpdateMatchType();
  const gameMode = useSelector(getMatchType);

  return {
    updateChosenPlayers,
    createTeams,
    updateDateAndPlaceMatch,
    chosenPlayers,
    teams,
    dateAndPlaceMatch,
    updateMatchType,
    gameMode,
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

const MOCK_DATE_AND_PLACE: DateAndPlaceMatch = {
  date: '17/12/2020',
  place: 'anyString',
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
  test('Should update date and place', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => {
      result.current.updateDateAndPlaceMatch(MOCK_DATE_AND_PLACE);
    });
    expect(result.current.dateAndPlaceMatch).toEqual({
      date: '17/12/2020',
      place: 'anyString',
    });
  });
  test('Should update matchType', async () => {
    const { result } = renderHook(() => useTestHook());
    act(() => {
      result.current.updateMatchType('football');
    });
    expect(result.current.gameMode).toEqual('football');
  });
});
