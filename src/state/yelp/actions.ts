import { createAction, createAsyncAction } from "typesafe-actions";
import * as YelpActionTypes from "./types";
import { RawBusinessesObjects, SearchParams } from "../../types/types";

export const goToNextPage = (page: number) => {
  return {
    type: YelpActionTypes.GO_NEXT_PAGE,
    payload: page,
  };
};
export const getTotal = (total: number) => {
  return {
    type: YelpActionTypes.GET_TOTAL,
    payload: total,
  };
};

export const goNextStep = () => {
  return { type: YelpActionTypes.GO_NEXT_STEP };
};

export const fetchBusinessRestaurantsAsync = createAsyncAction(
  YelpActionTypes.FETCH_BUSINESSES_RESTAURANTS_REQUEST,
  YelpActionTypes.FETCH_BUSINESSES_RESTAURANTS_SUCCESS,
  YelpActionTypes.FETCH_BUSINESSES_RESTAURANTS_FAILURE
)<SearchParams, RawBusinessesObjects, Error>();
