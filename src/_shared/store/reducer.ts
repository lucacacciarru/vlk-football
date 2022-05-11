import { combineReducers } from "redux";
import { playerRootReducer } from "../../player/store/reducers";

const reducers = {
  player: playerRootReducer,
};

export const reducer = combineReducers(reducers);
