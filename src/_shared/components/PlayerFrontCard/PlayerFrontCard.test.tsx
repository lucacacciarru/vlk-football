import { render } from "../../testConfig/customRender";
import { PlayerFrontCard } from "./PlayerFrontCard";

describe("PlayerFrontCard component", () => {
  test("Should be rendered", () => {
    render(
      <PlayerFrontCard
        player={{ goalkeeper: false, name: "anyString", rating: 8 }}
        team="klv"
      />
    );
  });
});
