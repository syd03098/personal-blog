import SiteConfig from '@src/siteConfig';
import { DefaultSeo } from 'next-seo';
import React from 'react';

function DefaultSEO(): JSX.Element {
  return (
    <DefaultSeo
      title={SiteConfig.title}
      description={SiteConfig.description}
      canonical={SiteConfig.url}
      openGraph={{
        title: `${SiteConfig.title}`,
        type: 'website',
        url: `${SiteConfig.url}`,
        description: `${SiteConfig.description}`,
      }}
    />
  );
}

export default DefaultSEO;
