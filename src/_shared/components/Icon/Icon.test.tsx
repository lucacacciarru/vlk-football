import { render, screen } from "../../testConfig/customRender";
import { Icon } from "./Icon";

describe("test", () => {
  test("testaa", () => {
    render(<Icon name="ball" data-testid="icon" />, {
      mocks: { player: { data: { allIds: [], byId: {} } } },
    });
    const icon = screen.getByTestId("icon");
    expect(icon).toBeVisible();
  });
});
