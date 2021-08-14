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
          <link rel="icon" href="/static/favicon.ico" />
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
