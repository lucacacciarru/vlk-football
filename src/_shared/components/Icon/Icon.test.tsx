import { render } from "../../testConfig/customRender";
import { Icon } from "./Icon";

describe("Icon component", () => {
  test("Should be rendered", () => {
    render(<Icon name="hand" />);
  });
});
