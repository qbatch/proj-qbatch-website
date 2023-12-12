import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          robots
          title
          description
          keywords
          siteUrl
          twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}