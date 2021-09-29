import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@src/theme';
import { AppProps } from 'next/app';
import GlobalStyles from '@components/GlobalStyles';
import RootLayout from '@components/layout/RootLayout';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        title="Yongho kim"
        description="Yongho Kim, React & Next-js & Frontend & Computer Science, University Of Seoul, Dpt. Computer Science"
        canonical="https://yongho-kim.com"
        openGraph={{
          title: 'Yongho kim',
          type: 'website',
          url: 'https://yongho-kim.com',
          description:
            'Yongho Kim, React & Next-js & Frontend & Computer Science, University Of Seoul, Dpt. Computer Science',
        }}
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { httpEquiv: 'x-ua-compatible', content: 'IE=edge' },
        ]}
      />
      {/* google analytics 스크립트 */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BZBFZDEB95"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BZBFZDEB95');
              `,
            }}
          />
        </>
      )}
      <ThemeProvider theme={darkTheme}>
        {/* todo: lightMode 구현 */}
        <GlobalStyles />
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
