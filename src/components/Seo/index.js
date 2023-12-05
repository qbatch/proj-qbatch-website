import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata.jsx'

const SEO = ({ title, description, language, robots, pathname, children, type, data }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    keywords,
    robots: defaultrobots,
    language: defaultLanguage,
  } = useSiteMetadata()
  const seo = {
    robots: robots || defaultrobots,
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    language: language || defaultLanguage,
    keywords,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="robots" content={seo.robots} />
      <meta name="description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta property="og:url" content={seo.url} key="og:url" />
      <meta property="og:title" content={seo.title} key="og:title" />
      <meta property="og:description" content={seo.description} key="og:description" />
      <meta property="og:image" content={seo.image} key="og:image" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="canonical" href={seo.url} />
      <meta name="keywords" content={seo.keywords} />
      <meta http-equiv="content-language" content={seo.language} />
      {children}
    </>
  )
}
export default SEO
