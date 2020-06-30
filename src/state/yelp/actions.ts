import { createAction, createAsyncAction } from "typesafe-actions";
import * as YelpActionTypes from "./types";

export const goToNextPage = (page: number): object => {
  return {
    type: YelpActionTypes.GO_NEXT_PAGE,
    payload: page,
  };
};

export const goNextStep = () => {
  return { type: YelpActionTypes.GO_NEXT_STEP };
};
