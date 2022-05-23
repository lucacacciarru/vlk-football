import { renderHook } from "@testing-library/react";
import { TestWrapper } from "./TestWrapper";
import { DefaultRootState } from "react-redux";

function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: { mocks?: Partial<DefaultRootState> }
) {
  return renderHook(callback, {
    wrapper: (args) => TestWrapper({ ...args }),
    ...options,
  });
}
export * from "@testing-library/react";
export { customRenderHook as renderHook };
