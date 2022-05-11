import { CaseReducer } from "@reduxjs/toolkit";
import { FetchPlayerRequestAction } from "../../types/fetchPlayer";
import { PlayerState } from "../../types/general";

export const requestCase: CaseReducer<PlayerState, FetchPlayerRequestAction> = (
  state
) => ({
  ...state,
  rollbackData: {
    ...state.data,
  },
});
