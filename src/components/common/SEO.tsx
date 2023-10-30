import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description:
    'Graasp is an ecosystem of tools for digital education. They allow teachers and students to communicate, collaborate, and build engaging learning experiences. ',
  title: 'Graasp',
  url: 'https://graasp.org',
  author: 'Graasp',
  keywords: [
    'graasp',
    'digital education',
    'learning platform',
    'open source',
    'stem',
    'switzerland',
  ],
  img: 'https://avatars3.githubusercontent.com/u/43075056',
  twitterId: '@graasp',
  facebookId: 'graasp',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
