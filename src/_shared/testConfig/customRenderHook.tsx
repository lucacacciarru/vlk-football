import { renderHook, RenderHookOptions } from '@testing-library/react';
import { TestWrapper } from './TestWrapper';
import { CustomOptions } from './types';

type RenderHookCustomOptions<Props> = CustomOptions & RenderHookOptions<Props>;

function customRenderHook<Props, Result>(
  callback: (props: Props) => Result,
  { mocks, history, ...options }: RenderHookCustomOptions<Props> = {},
) {
  return renderHook(callback, {
    wrapper: args => TestWrapper({ mocks, history, ...args }),
    ...options,
  });
}
export * from '@testing-library/react';
export { customRenderHook as renderHook };
