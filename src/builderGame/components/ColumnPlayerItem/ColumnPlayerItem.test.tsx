import { render } from "../../../_shared/testConfig/customRender";
import { ColumnPlayerItem } from "./ColumnPlayerItem";

describe("ColumnPlayerItem component", () => {
  test("Should be rendered", () => {
    render(<ColumnPlayerItem id="anyId" />);
  });
});
