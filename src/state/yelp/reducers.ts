import { YelpState, GO_NEXT_PAGE, GO_NEXT_STEP } from "./types";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";

export const yelpInitialState: YelpState = {
  page: 0,
  query: "",
  total: 0,
  isLoading: false,
  error: null,
};

export type YelpAction = ActionType<typeof actions>;

export const yelpReducer = (
  state = yelpInitialState,
  action: YelpAction
): YelpState => {
  switch (action.type) {
    case GO_NEXT_STEP: {
      return { ...state, page: state.page + 5 };
    }
    default:
      return state;
  }
};
