import { configureStore } from '@reduxjs/toolkit';
import { CustomOptions } from './types';
import { configureStoreOptions } from '../store';

export function getStoreForTesting(options?: Pick<CustomOptions, 'mocks'>) {
  const storeTesting = configureStore({
    ...configureStoreOptions,
    preloadedState: options?.mocks,
  });

  return storeTesting;
}
