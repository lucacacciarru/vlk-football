import { render } from "../../testConfig/customRender";
import { PlayerCardSkeleton } from "./PlayerCardSkeleton";

describe("PlayerCardSkeleton component", () => {
  test("Should be rendered", () => {
    render(<PlayerCardSkeleton numberOfItems={1} />);
  });
});
