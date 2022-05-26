import { render } from "../../_shared/testConfig/customRender";
import { Landing } from "./Landing";

describe("Landing page", () => {
  test("Should be rendered", () => {
    render(<Landing />);
  });
});
