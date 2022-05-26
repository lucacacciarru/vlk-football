import { render } from "../../../_shared/testConfig/customRender";
import { LandingProvider } from "./LandingContext";

describe("LandingContext component", () => {
  test("Should be rendered", () => {
    render(<LandingProvider />);
  });
});
