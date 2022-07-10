import { DefaultRootState } from 'react-redux';
import { MemoryHistory } from 'history';

export type CustomOptions = {
  mocks?: Partial<DefaultRootState>;
  history?: MemoryHistory;
};
