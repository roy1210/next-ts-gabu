/* eslint-disable */
// Ref: https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c
// Ref: https://github.com/vercel/next.js/blob/master/examples/with-google-analytics/pages/_document.js

import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();
    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {/*
          // @ts-ignore */}
          {this.props.styleTags}

          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
            sizes="192x192"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Find Yummy Restaurant!" />
          <meta property="og:title" content="Gabu" />
          <meta property="og:description" content="Find Yummy Restaurant!" />
          {/* <meta property="og:image" content="/og-image.png" /> */}
          {/* <meta property="og:image:width" content="1280" /> */}
          {/* <meta property="og:image:height" content="672" /> */}
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://swingby.network/en/" /> */}

          <meta property="og:locale" content="en_us" />

          <link rel="manifest" href="/manifest.json" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
