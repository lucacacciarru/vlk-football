import { Button } from "@chakra-ui/react";
import {
  render,
  screen,
  fireEvent,
} from "../../../_shared/testConfig/customRender";
import {
  renderHook,
  waitFor,
} from "../../../_shared/testConfig/customRenderHook";
import { useTeamName } from "./useTeamName";

describe("useCompany name hook", () => {
  test("if onClick is called, isVlkTeam should be change", async () => {
    const { result } = renderHook(() => useTeamName());
    const { onClick, selectedTeam: previousSelectedName } = result.current;
    render(<Button onClick={onClick} data-testid="button" />);
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    await waitFor(() => {
      expect(result.current.selectedTeam).not.toBe(previousSelectedName);
    });
  });
});
