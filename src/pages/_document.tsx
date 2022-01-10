import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: innerHtml,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const innerHtml = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()`;

function setInitialColorMode() {
  function getInitialTheme() {
    const preference = localStorage.getItem('theme');

    if (typeof preference === 'string') {
      return preference;
    }

    return 'dark';
  }

  const theme = getInitialTheme();
  const root = document.documentElement;
  root.style.setProperty('--initial-color-mode', theme);

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

export default MyDocument;
