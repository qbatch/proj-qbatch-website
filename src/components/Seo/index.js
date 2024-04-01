import React from 'react'
import PropTypes from "prop-types"
import { useSiteMetadata } from '../../hooks/use-site-metadata.jsx'
import { Helmet } from "react-helmet";

const SEO = (props) => {
  const { title, description, language, robots, pathname, children, image, keywords } = props
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
    robots: defaultrobots,
    language: defaultLanguage,
  } = useSiteMetadata()

  const seo = {
    robots: robots || defaultrobots,
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    language: language || defaultLanguage,
    userName: twitterUsername,
    keywords,
    image,
  }
  const staging=  process.env.GATSBY_ENV
  const meta=[
        {
          name: `description`,
          content: seo.description,
        },
          {
          name: `robots`,
          content: seo.robots,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
           key:"og:description"
        },
        {
          property: `og:type`,
          content:"WebPage"
        },
        {
          name: `twitter:card`,
          content:"summary_large_image"
        },
        {
          name: `twitter:creator`,
          content: seo.userName,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
         {
          name: `twitter:card`,
          content:"summary_large_image"
        },
          {
          name: `twitter:title`,
          content:seo.title
        },
         {
          name: `twitter:url`,
          content:seo.url
        },
        {
          name: `twitter:description`,
          content:seo.description
        },
         {
          name: `twitter:image`,
          content:seo.image && seo.image
        },
        {
          name: `or:url`,
          content:seo.url,
          key:"og:url"
        },
           {
          name: `or:locale`,
          content:"en_US"
        },
        {
          name: `og:image:width`,
          content:"1200"
        },
         {
          name: `og:image:height`,
          content:"630"
        },
         {
          name: `keywords`,
          content:seo.keywords
        },
         {
          name: `content-language`,
          content:seo.language
        }
      ]
 
  

  return (
    <>
    <Helmet
       htmlAttributes={{
        language,
      }}
      titleTemplate={seo.title}
       title={seo.title}
       meta={staging ? [{
              name: `robots`,
              content: "noindex,nofollow",
            }]
          : meta}
       />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.image && <meta property="og:image" content={seo.image} key="og:image" />}
      <link rel="canonical" href={seo.url} />
      {children}
    </>

  )
}
  SEO.defaultProps = {
  language: `en`,
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
export default SEO