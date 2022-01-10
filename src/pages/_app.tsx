import DefaultSEO from '@components/DefaultSEO';
import GlobalStyles from '@components/GlobalStyles';
import RootLayout from '@components/layout/RootLayout';
import Scripts from '@components/Scripts';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'reakit/Provider';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <DefaultSEO />
      <Scripts />
      <GlobalStyles />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default App;
