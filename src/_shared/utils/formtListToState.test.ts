import { formatListToState } from "./formatListToState";

const MOCK_LIST = [
  {
    id: "1",
    value: "test",
  },
  {
    id: "2",
    value: "test",
  },
];

const expectAllIds = ["1", "2"];
const expectByIds = {
  "1": {
    id: "1",
    value: "test",
  },
  "2": {
    id: "2",
    value: "test",
  },
};

describe("formatListToState function", () => {
  test("should return an id array and a object with id as key and the other attributes inside", () => {
    const { allIds, byId } = formatListToState(MOCK_LIST);
    expect(allIds).toEqual(expectAllIds);
    expect(byId).toEqual(expectByIds);
  });
});
