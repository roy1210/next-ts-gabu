import { RawBusinessesObjects } from "./../../types/types";
export interface YelpState {
  readonly page: number;
  readonly query: string;
  readonly total: number;
  readonly isLoading: boolean;
  readonly restaurants: RawBusinessesObjects | null;
  readonly error: Error | null;
}

export const GO_NEXT_PAGE = "@@yelp/GO_NEXT_PAGE";
export const GET_TOTAL = "@@yelp/GET_TOTAL";
export const GO_NEXT_STEP = "@@swap/GO_NEXT_STEP";

export const FETCH_BUSINESSES_RESTAURANTS_REQUEST =
  "@@yelp/FETCH_BUSINESSES_RESTAURANTS_REQUEST";
export const FETCH_BUSINESSES_RESTAURANTS_SUCCESS =
  "@@yelp/FETCH_BUSINESSES_RESTAURANTS_SUCCESS";
export const FETCH_BUSINESSES_RESTAURANTS_FAILURE =
  "@@yelp/FETCH_BUSINESSES_RESTAURANTS_FAILURE";
