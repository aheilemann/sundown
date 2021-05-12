import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import { OrderProvider } from "../contexts/orderContext";
import GlobalStyle from "../common/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Sundown Boulevard</title>
        <meta name="description" content="Great food - great view" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <OrderProvider>
          <Component {...pageProps} />
        </OrderProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
