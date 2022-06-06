import { DefaultRootState } from 'react-redux';

export type CustomOptions = {
  mocks?: Partial<DefaultRootState>;
  initialRoutes?: string[];
};
