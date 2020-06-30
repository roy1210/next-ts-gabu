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
/* ------------------------------- End import ------------------------------- */

const store = configureStore();
const makestore = () => store;
const wrapper = createWrapper(makestore);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
