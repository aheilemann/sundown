import Head from "next/head";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../constants/theme";

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Sundown Boulevard</title>
        <meta name="description" content="Great food - great view" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
