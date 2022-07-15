import { renderHook } from '../../_shared/testConfig/customRenderHook';
import { PATHS } from '../../_shared/types';
import { BuilderGameState } from '../store/types';
import { useCheckPathnameAndChosenPlayers } from './useCheckPathnameAndChosenPlayers';

const BUILDER_GAME_MOCK: BuilderGameState = {
  chosenPlayers: {
    availablePlayers: [],
    selectedPlayers: [],
  },
  date: 'anyString',
  place: 'anyString',
  selectedSport: 'futsal',

  teams: {
    klv: { players: [], ratingsScore: 0 },
    vlk: { players: [], ratingsScore: 0 },
  },
};

describe('useCheckPathnameAndChosenPlayers hook', () => {
  test('', () => {
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
});
