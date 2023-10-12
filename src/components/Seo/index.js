import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata.jsx'

const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, keywords, robot } = useSiteMetadata()

  const seo = {
    robots: robot,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords,
  }

  return (
    <>
      <meta name="robots" content={seo.robot} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta name="keywords" content={seo.keywords} />
      <meta http-equiv="content-language" content="en-us" />
      {children}
    </>
  )
}
export default SEO
