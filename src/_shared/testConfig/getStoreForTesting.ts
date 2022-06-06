import { configureStore } from '@reduxjs/toolkit';
import { CustomOptions } from './types';
import { configureStoreOptions } from '../store';

export function getStoreForTesting(options?: CustomOptions) {
  const storeTesting = configureStore({
    ...configureStoreOptions,
  });

  return storeTesting;
}
