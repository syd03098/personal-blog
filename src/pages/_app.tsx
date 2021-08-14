import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@src/theme';
import { AppProps } from 'next/app';
import GlobalStyles from '@components/GlobalStyles';
import RootLayout from '@components/layout/RootLayout';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        defaultTitle="Yongho kim"
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
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge',
          },
        ]}
      />
      <ThemeProvider theme={darkTheme}>
        {/* todo: 구글 애널리틱스 스크립트 추가 */}
        {/* todo: lightMode 구현 */}
        {/* todo: canonical url 수정 */}
        <GlobalStyles />
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
