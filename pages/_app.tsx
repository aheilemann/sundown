import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sundown Boulevard</title>
        <meta name="description" content="Great food - great view" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
