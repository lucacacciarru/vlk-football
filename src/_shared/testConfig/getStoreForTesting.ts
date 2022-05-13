import { configureStore } from "@reduxjs/toolkit";
import { CustomOptions } from "./types";
import { configureStoreOptions, store } from "../store";

export function getStoreForTesting(options?: CustomOptions) {
  const state = { store, ...options?.mocks };

  const storeTesting = configureStore({
    ...configureStoreOptions,
    preloadedState: state,
  });

  return storeTesting;
}
