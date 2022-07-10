import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { TestWrapper } from './TestWrapper';
import { CustomOptions } from './types';

type CustomRenderOptions = CustomOptions & RenderOptions;

function customRender(
  ui: ReactElement,
  { history, mocks, ...options }: CustomRenderOptions = {},
) {
  return render(ui, {
    wrapper: args => TestWrapper({ history, mocks, ...args }),
    ...options,
  });
}

export * from '@testing-library/react';
export { customRender as render };
