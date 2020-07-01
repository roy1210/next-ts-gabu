/* --------------------------------- Import --------------------------------- */
import React from "react";
import { AppProps } from "next/app";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import configureStore from "../src/store";
import Layout from "../src/components/Layout";
/* ---------------------------- Animation library --------------------------- */

/* ----------------------------------- CSS ---------------------------------- */
import "bulma/css/bulma.css";
import { rootSaga } from "../src/state/configureStore";
/* ------------------------------- End import ------------------------------- */

const store = configureStore();
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  // store.runSaga(rootSaga);
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default wrapper.withRedux(App);
