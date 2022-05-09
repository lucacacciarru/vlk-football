import { all, fork, ForkEffect } from "redux-saga/effects";

type Sagas = (() => Generator<ForkEffect<never>, void, unknown>)[];

export const createRootSaga = () => {
  const allSagas: Sagas = [];
  return function* rootSaga() {
    yield all(allSagas.map((saga) => fork(saga)));
  };
};
