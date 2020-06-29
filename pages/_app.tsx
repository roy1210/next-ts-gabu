/* --------------------------------- Import --------------------------------- */
import React from "react";
import { AppProps } from "next/app";
import Layout from "../src/components/Layout";

/* ---------------------------- Animation library --------------------------- */

/* ----------------------------------- CSS ---------------------------------- */
import "bulma/css/bulma.css";
/* ------------------------------- End import ------------------------------- */

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  // **
  //  * Ref: https://github.com/natemoo-re/next.js/blob/example-framer-motion/examples/with-framer-motion/pages/_app.js
  //  *
  //  * Handle scrolling gracefully, since next/router scrolls to top
  //  * before exit animation is complete.
  //  *
  //  * Note that next/link components should also be using `scroll={false}`
  //  **/
  // const handleExitComplete = (): void => {
  //   if (typeof window !== "undefined") {
  //     window.scrollTo({
  //       top: 0,
  //     });
  //   }
  // };

  return (
    <>
      <Layout>
        {/* <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <motion.div
              key={router.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={PageVariants}
              transition={PageTransition}
            > */}
        <Component {...pageProps} />
        {/* </motion.div>
          </AnimatePresence> */}
      </Layout>
    </>
  );
};

export default App;
