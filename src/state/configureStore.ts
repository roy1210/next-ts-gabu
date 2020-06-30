import { combineReducers } from "redux";
import { yelpReducer } from "./yelp/reducers";
// import { all, fork } from "redux-saga/effects";

export const rootReducer = combineReducers({
  yelp: yelpReducer,
});

// export function* rootSaga() {
//   yield all([fork(swapSaga), fork(explorerSaga), fork(settingsSaga)]);
// }
