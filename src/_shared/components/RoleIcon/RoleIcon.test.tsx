import { render } from "../../testConfig/customRender";
import { RoleIcon } from "./RoleIcon";

describe("RoleIcon component", () => {
  test("Should be rendered", () => {
    render(<RoleIcon size="12" goalkeeper={true} />);
  });
});
