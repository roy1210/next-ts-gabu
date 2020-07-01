import { YelpState, GO_NEXT_PAGE, GO_NEXT_STEP, GET_TOTAL } from "./types";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";

export const yelpInitialState: YelpState = {
  page: 0,
  query: "",
  total: 0,
  isLoading: false,
  error: null,
  restaurants: null,
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
    case GET_TOTAL: {
      return { ...state, total: action.payload };
    }
    case GO_NEXT_PAGE: {
      return { ...state, page: state.page + action.payload };
    }

    case getType(actions.fetchBusinessRestaurantsAsync.request): {
      return { ...state, isLoading: true };
    }
    case getType(actions.fetchBusinessRestaurantsAsync.success): {
      return { ...state, isLoading: false, restaurants: action.payload };
    }
    case getType(actions.fetchBusinessRestaurantsAsync.failure): {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
