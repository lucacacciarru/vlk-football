import fetchMock from "jest-fetch-mock";
import { waitFor } from "@testing-library/react";
import { getStoreForTesting } from "../../_shared/testConfig/getStoreForTesting";
import { fetchPlayerTrigger } from "../store/action/fetchPlayer";
import { PlayerState } from "../store/types/general";

function mockFetch(response?: Object) {
  fetchMock.doMock(() =>
    Promise.resolve({
      body: JSON.stringify(response || {}),
    })
  );
}
function mockFetchReject() {
  fetchMock.doMock(() => Promise.reject({}));
}

const MOCK_PLAYER = [
  {
    id: "1",
    name: "Test",
    rating: 12,
    goalkeeper: false,
    avatar: "anySrc",
  },
];

const MOCK_STATE: PlayerState = {
  data: {
    allIds: [MOCK_PLAYER[0].id],
    byId: {
      [MOCK_PLAYER[0].id]: { ...MOCK_PLAYER[0] },
    },
  },
};

const EMPTY_MOCK_STATE: PlayerState = {
  data: {
    allIds: [],
    byId: {},
  },
};

describe("Fetch player", () => {
  test("Player state should be populated", async () => {
    mockFetch(MOCK_PLAYER);
    const store = getStoreForTesting();
    store.dispatch(fetchPlayerTrigger());
    await waitFor(() => {
      expect(store.getState().player).toEqual(MOCK_STATE);
    });
  });

  test("If the API is rejected, Player state should be empty", async () => {
    mockFetchReject();
    const store = getStoreForTesting();
    store.dispatch(fetchPlayerTrigger());
    await waitFor(() => {
      expect(store.getState().player).toEqual(EMPTY_MOCK_STATE);
    });
  });
});
