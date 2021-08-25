import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, {
  DocumentContext,
  NextScript,
  Html,
  Head,
  Main,
} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          {/* default favicon */}
          <link rel="icon" href="/static/favicon.ico" />
          {/* google analytics 스크립트 */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-BZBFZDEB95"
              />
              <script
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
          {/* Noto Sans KR 폰트 */}
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Noto+Sans+KR:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (context: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = context.renderPage;

  try {
    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(context);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
