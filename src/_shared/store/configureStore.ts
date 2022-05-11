import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { Saga } from "redux-saga";
import createSagaMiddleware from "@redux-saga/core";
import { createPlayerSaga } from "../../player/store/saga/create";
import { createRootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(createRootSaga());
