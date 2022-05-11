import { CaseReducer } from "@reduxjs/toolkit";
import { CreatePlayerRequestAction } from "../../types/createPlayer";
import { PlayerState } from "../../types/general";

export const requestCase: CaseReducer<
  PlayerState,
  CreatePlayerRequestAction
> = (state, action) => ({
  ...state,
  rollbackData: { ...state.data },
  data: {
    allIds: [...state.data.allIds, action.payload.id],
    byId: {
      ...state.data.byId,
      [action.payload.id]: {
        ...action.payload,
      },
    },
  },
});
