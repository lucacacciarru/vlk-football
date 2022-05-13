import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { TestWrapper } from "./TestWrapper";
import { DefaultRootState } from "react-redux";

function customRender(
  ui: ReactElement,
  options?: { mocks?: Partial<DefaultRootState> }
) {
  return render(ui, {
    wrapper: (args) => TestWrapper({ ...args }),
    ...options,
  });
}

export * from "@testing-library/react";
export { customRender as render };
