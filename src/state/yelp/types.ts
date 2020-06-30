export interface YelpState {
  readonly page: number;
  readonly query: string;
  readonly total: number;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const GO_NEXT_PAGE = "@@yelp/GO_NEXT_PAGE";
export const GO_NEXT_STEP = "@@swap/GO_NEXT_STEP";
