import { combineReducers } from "redux";
import { playerRootReducer } from "../../player/store/reducers";

const reducers = {
  player: playerRootReducer,
};

declare module "react-redux" {
  type LocalRootReducers = {
    [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>;
  };

  export interface DefaultRootState extends LocalRootReducers {}
}

export const reducer = combineReducers(reducers);
