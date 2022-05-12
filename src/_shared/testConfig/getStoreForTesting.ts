import { configureStore } from "@reduxjs/toolkit";
import { CustomOptions } from "./types";
import createSagaMiddleware from "redux-saga";
import { DefaultRootState } from "react-redux";
import { reducer, createRootSaga } from "../store";

const INITIAL_STATE: DefaultRootState = {
  player: { data: { allIds: [], byId: {} } },
};

const sagaMiddleware = createSagaMiddleware();

export function getStoreForTesting(options?: CustomOptions) {
  const state = { ...INITIAL_STATE, ...options?.mocks };

  const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware],
    preloadedState: state,
  });

  sagaMiddleware.run(createRootSaga());

  return store;
}
