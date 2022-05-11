import { all, fork } from "redux-saga/effects";
import { playerRootSaga } from "../../player/store/saga/rootSaga";

export const createRootSaga = () => {
  return function* rootSaga() {
    const allSagas = [playerRootSaga];
    yield all(allSagas.map((saga) => fork(saga)));
  };
};
