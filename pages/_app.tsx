/* tslint:disable */
import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../constants/theme";
// import OrderContext from "../contexts/orderContext";
import { OrderProvider } from "../contexts/orderContext";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
  box-sizing: border-box;
  }
`;

const order = {
  email: "test",
  foods: [],
  drinks: [],
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Sundown Boulevard</title>
        <meta name="description" content="Great food - great view" />
      </Head>
      <ThemeProvider theme={theme}>
        <OrderProvider>
          {/* <OrderContext.Provider> */}
          <Component {...pageProps} />
          {/* </OrderContext> */}
        </OrderProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
