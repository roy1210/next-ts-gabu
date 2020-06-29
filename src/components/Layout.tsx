import Head from "next/head";
import React, { ReactNode } from "react";
import { GlobalStyle } from "../styles/globalStyle";

type Props = {
  children: ReactNode;
};

// Memo: next-translate won't work in Layout
const Layout = (props: Props): JSX.Element => {
  // const {
  //   state: { height, currentTheme },
  //   dispatch,
  // } = useContext(GlobalContext);

  // const router = useRouter();

  return (
    <>
      <Head>
        <title>Gabu</title>
      </Head>
      <GlobalStyle />
      {props.children}
    </>
  );
};

export default Layout;
