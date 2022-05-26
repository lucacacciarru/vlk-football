import { render } from "../../../_shared/testConfig/customRender";
import { ColumnPlayerContent } from "./ColumnPlayerContent";

describe("ColumnPlayerContent component", () => {
  test("Should be rendered", () => {
    render(<ColumnPlayerContent id="anyid" />);
  });
});
