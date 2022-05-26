import { Player } from "../../../player/store";
import { renderHook } from "../../../_shared/testConfig/customRenderHook";
import { useShowPlayer } from "./useShowPlayer";

const players: Player[] = [
  { goalkeeper: false, id: "anyid", name: "Test", rating: 12 },
];

describe("useShowPlayer hook", () => {
  test("If hook attributes is not undefined, renderPlayers should contains JSX element", () => {
    const { result } = renderHook(() => useShowPlayer(players));
    expect(result.current.renderPlayers).not.toBeUndefined();
  });
});
