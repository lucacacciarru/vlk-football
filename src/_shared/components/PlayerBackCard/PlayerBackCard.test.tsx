import { render } from "../../testConfig/customRender";
import { PlayerBackCard } from "./PlayerBackCard";

describe("PlayerBackCard.test", () => {
  test("Should be rendered", () => {
    render(<PlayerBackCard description="anyString" name="anyString" />);
  });
});
