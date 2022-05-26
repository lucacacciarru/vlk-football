import { render } from "../../testConfig/customRender";
import { PlayerCard } from "./PlayerCard";

describe("PlayerCard component", () => {
  test("Should be rendered", () => {
    render(
      <PlayerCard
        goalkeeper={false}
        id="anyId"
        name="anyString"
        rating={12}
        team="klv"
      />
    );
  });
});
