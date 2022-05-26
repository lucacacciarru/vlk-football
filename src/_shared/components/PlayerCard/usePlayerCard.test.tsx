import { Button } from "@chakra-ui/react";
import { renderHook } from "@testing-library/react";
import { render, screen, fireEvent } from "../../testConfig/customRender";
import { usePlayerCard } from "./usePlayerCard";

describe("usePlayerCard hook", () => {
  test("If onclick is called, props should be change", () => {
    const { result } = renderHook(() => usePlayerCard({ team: "klv" }));
    render(<Button onClick={result.current.onClick} data-testid="button" />);
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(result.current.frontContainerProps.__css?.transform).toBe(
      "rotateY(180deg)"
    );
  });
});
