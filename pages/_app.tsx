/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlobalStyle';
import { darkTheme } from '../src/theme/colors';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}

export default MyApp;
