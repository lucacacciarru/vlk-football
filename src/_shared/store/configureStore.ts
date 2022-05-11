import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import { createRootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(createRootSaga());
