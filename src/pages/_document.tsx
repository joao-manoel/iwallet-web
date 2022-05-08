import React from "react";
import Document, { Html, Main, Head, NextScript } from 'next/document'


class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="pt_Br">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="iWallet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument