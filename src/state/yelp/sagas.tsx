import { all, put, takeLatest, call } from "redux-saga/effects";
import { fetchBusinessRestaurantsAsync, getTotal } from "./actions";
import { FETCH_BUSINESSES_RESTAURANTS_REQUEST } from "./types";
import { RawSearchObject } from "../../types/types";
import yelp from "../../hocks/yelp-api/yelp";

function* handleFetchBusinessesRestaurants(
  action: ReturnType<typeof fetchBusinessRestaurantsAsync.request>
): Generator {
  const { term, location } = action.payload;

  try {
    const url = "/businesses/search";

    const fetchYelp = () => {
      return yelp.get(url, {
        params: { term, location },
      });
    };

    const response = yield call(fetchYelp);

    //@ts-ignore
    const data: RawSearchObject = response.data;

    yield put(getTotal(data.total));
    yield put(fetchBusinessRestaurantsAsync.success(data.businesses));
  } catch (err) {
    yield put(fetchBusinessRestaurantsAsync.failure(err));
  }
}

export default function* yelpSaga() {
  yield all([
    takeLatest(
      FETCH_BUSINESSES_RESTAURANTS_REQUEST,
      handleFetchBusinessesRestaurants
    ),
  ]);
}
