import {
  renderHook,
  waitFor,
  act,
} from "../../../_shared/testConfig/customRenderHook";
import { useTeamName } from "./useTeamName";

describe("useCompany name hook", () => {
  test("selected team should be VLK", async () => {
    const { result } = renderHook(() => useTeamName());
    act(() => result.current.onClick());
    await waitFor(() => {
      expect(result.current.selectedTeam).toBe("VLK");
    });
  });
});
