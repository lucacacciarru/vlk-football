import { render } from "../../../_shared/testConfig/customRender";
import { Column } from "./Column";

describe("Column component", () => {
  test("Should be rendered", () => {
    render(<Column id="anyId" items={["1"]} />);
  });
});
