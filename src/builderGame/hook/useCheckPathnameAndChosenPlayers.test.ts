import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { PATHS } from '../../_shared/types';
import { BuilderGameState } from '../store/types';
import { useCheckPathnameAndChosenPlayers } from './useCheckPathnameAndChosenPlayers';

const BUILDER_GAME_MOCK: BuilderGameState = {
  chosenPlayers: {
    selectedPlayers: [],
  },
  date: 'anyString',
  place: 'anyString',
  matchType: 'futsal',

  teams: {
    klv: { players: [], ratingsScore: 0 },
    vlk: { players: [], ratingsScore: 0 },
  },
};

describe('useCheckPathnameAndChosenPlayers hook', () => {
  test('If the selectedPlayer is not equal than the number of players in the selected matchType. should return false', () => {
    const pathname = `/${PATHS.PRE_MATCH}`;
    const { result } = renderHook(
      () => useCheckPathnameAndChosenPlayers(pathname),
      {
        mocks: {
          builderGame: BUILDER_GAME_MOCK,
        },
      },
    );
    expect(result.current).toBeFalsy();
  });
  test('If matchType is undefined should return false', () => {
    const pathname = `/${PATHS.PRE_MATCH}`;
    const { result } = renderHook(
      () => useCheckPathnameAndChosenPlayers(pathname),
      {
        mocks: {
          builderGame: { ...BUILDER_GAME_MOCK },
        },
      },
    );
    expect(result.current).toBeFalsy();
  });
});
