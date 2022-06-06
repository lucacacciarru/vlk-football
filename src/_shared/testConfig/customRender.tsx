import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { TestWrapper } from './TestWrapper';
import { CustomOptions } from './types';

type CustomRenderOptions = CustomOptions & RenderOptions;

function customRender(
  ui: ReactElement,
  { initialRoutes, mocks, ...options }: CustomRenderOptions = {},
) {
  return render(ui, {
    wrapper: args => TestWrapper({ initialRoutes, mocks, ...args }),
    ...options,
  });
}

export * from '@testing-library/react';
export { customRender as render };
