import { configureStore } from "@reduxjs/toolkit";
import { CustomOptions } from "./types";
import { configureStoreOptions, store } from "../store";
import { DefaultRootState } from "react-redux";

export function getStoreForTesting(options?: CustomOptions) {
  const state = { store, ...options?.mocks };

  const storeTesting = configureStore({
    ...configureStoreOptions,
  });

  return storeTesting;
}
