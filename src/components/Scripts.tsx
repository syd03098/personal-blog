import Script from 'next/script';
import React from 'react';

function Scripts() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BZBFZDEB95"
          />
          <Script
            id="google"
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
    </>
  );
}

export default Scripts;
