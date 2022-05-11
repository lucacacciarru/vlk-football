import { CaseReducer } from "@reduxjs/toolkit";
import { formatListToState } from "../../../../_shared/utils";
import { FetchPlayerSuccessAction } from "../../types/fetchPlayer";
import { PlayerState } from "../../types/general";

export const successCase: CaseReducer<PlayerState, FetchPlayerSuccessAction> = (
  state,
  action
) => {
  const { allIds, byId } = formatListToState(action.payload);
  return {
    ...state,
    data: {
      allIds,
      byId,
    },
    rollbackData: undefined,
  };
};
