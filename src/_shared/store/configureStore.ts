import { configureStore } from "@reduxjs/toolkit";
import { configureStoreOptions } from "./configureStoreOptions";

export const store = configureStore({
  ...configureStoreOptions,
  devTools: true,
});
