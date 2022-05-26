import { render } from "../../../_shared/testConfig/customRender";
import { Main } from "./Main";

describe("Main component", () => {
  test("Should be rendered", () => {
    render(<Main />);
  });
});
