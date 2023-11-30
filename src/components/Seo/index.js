import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata.jsx'

const SEO = ({ title, description, language, robots, pathname, children }) => {
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
      <link rel="canonical" href={seo.url} />
      <meta name="keywords" content={seo.keywords} />
      <meta http-equiv="content-language" content={seo.language} />
      {children}
    </>
  )
}
export default SEO
