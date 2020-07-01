import { applyMiddleware, compose, createStore, Store } from "redux";
import { createLogger, LogEntryObject } from "redux-logger";
import createSagaMiddleware, { runSaga, Task } from "redux-saga";
import { rootReducer, rootSaga } from "./state/configureStore";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__: any;
//   }
// }
// window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

// export default function configureStore(initialState: any): any {

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export default function configureStore(): any {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancers = [];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(
      // @ts-ignore
      createLogger({
        collapsed: (
          _getState: () => any,
          action: any,
          logEntry: LogEntryObject
        ) => !logEntry.error,
      })
    );
  }

  const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  const store = createStore(rootReducer, composeWithDevTools(composeEnhancers));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

// export const wrapper = createWrapper<State>(makeStore, { debug: true });
