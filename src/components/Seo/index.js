import React from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../../hooks/use-site-metadata.jsx';

const SEO = ({
  title,
  description,
  language,
  robots,
  pathname,
  children,
  image,
  keywords,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
    robots: defaultRobots,
    language: defaultLanguage,
  } = useSiteMetadata();

  const seo = {
    robots: robots || defaultRobots,
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
    language: language || defaultLanguage,
    userName: twitterUsername,
    keywords,
    image,
  };

  const staging = process.env.GATSBY_ENV;
  const isStaging = staging === 'staging';

  const renderCommonMetaTags = () => (
    <>
      <title>{seo.title}</title>
      <meta name="robots" content={seo.robots} />
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:creator" content={seo.userName} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="WebPage" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {seo.image && <meta property="og:image" content={seo.image} />}


    </>
  );

  return (
    <>
      {isStaging ? (
        <>
          <meta name="robots" content="noindex,nofollow" />
          {renderCommonMetaTags()}
        </>
      ) : (
        <>
          <link rel="canonical" href={seo.url} />
          {renderCommonMetaTags()}
          <meta name="keywords" content={seo.keywords} />
          <meta httpEquiv="content-language" content={seo.language} />
        </>
      )}
      {children}
    </>
  );
};

SEO.defaultProps = {
  language: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
