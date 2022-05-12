import { waitFor } from "@testing-library/react";
import { getStoreForTesting } from "../../_shared/testConfig/getStoreForTesting";
import { createPlayerTrigger } from "../store/action/createPlayer";
import { Player, PlayerState } from "../store/types/general";

const MOCK_PLAYER: Player = {
  id: "1",
  name: "Test",
  rating: 12,
  goalkeeper: false,
  avatar: "anySrc",
};

const MOCK_SUCCESSFUL_STATE: PlayerState = {
  data: {
    allIds: [MOCK_PLAYER.id],
    byId: {
      [MOCK_PLAYER.id]: {
        ...MOCK_PLAYER,
      },
    },
  },
};

function mockPost() {
  fetchMock.doMock(() => Promise.resolve({}));
}

describe("Create Player", () => {
  test("If create is successful, that Player should be in Player State", async () => {
    mockPost();
    const store = getStoreForTesting();
    store.dispatch(createPlayerTrigger(MOCK_PLAYER));
    await waitFor(() => {
      expect(store.getState().player).toEqual(MOCK_SUCCESSFUL_STATE);
    });
  });
});
