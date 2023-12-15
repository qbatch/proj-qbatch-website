import { useStaticQuery, graphql } from 'gatsby';

export const Queries = () => {
   const data = useStaticQuery(graphql`
     query BlogQuery {
       allStrapiBlog {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiArticle {
         nodes {
           blogTitle
           blogDescription {
             data {
               blogDescription
             }
           }
           bottomDescription {
             data {
               bottomDescription
             }
           }
           user {
             username
           }
           category {
             categoryName
           }
           blogTags {
             strapi_json_value
           }
           blogImg {
             localFile {
               url
             }
           }
           id
           publishedAt
           favorite
           bannerBlog
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiHome {
         nodes {
           schema {
             title
             visibilityIn
             childStrapiComponentSchemaSchemaStructureddataJsonnode {
               _context
               _id
               _type
               alternateName
               areaServed
               email
               description
               potentialAction {
                 _type
                 query_input
                 target {
                   type
                   urlTemplate
                 }
               }
               address {
                 _type
                 addressCountry
                 addressLocality
                 addressRegion
                 postalCode
                 streetAddress
                 telephone
               }
               brand {
                 _type
                 location
                 logo {
                   _type
                   height
                   url
                 }
                 name
                 sameAs
                 url
               }
               founder {
                 _type
                 description
                 email
                 gender
                 image
                 jobTitle
                 knowsLanguage
                 name
                 sameAs
                 url
               }
               geo {
                 _type
                 latitude
                 longitude
               }
               contactPoint {
                 _type
                 contactOption
                 contactType
                 telephone
               }
               knowsAbout
               legalName
               mainEntityOfPage
               name
               logo {
                 url
                 height
                 _type
                 width
               }
               openingHoursSpecification {
                 _type
                 closes
                 dayOfWeek
                 opens
               }
               sameAs
               slogan
               telephone
               url
               potentialAction {
                 _type
                 query_input
                 target {
                   type
                   urlTemplate
                 }
               }
             }
           }
           seo {
             metaimage {
               localFile {
                 url
               }
             }
             language
             metaDescription
             metaRobots
             metaTitle
             keywords
           }
         }
       }
       allStrapiPortfolio {
         nodes {
           seo {
             metaTitle
             metaRobots
             metaDescription
             language
             keywords
             slug
           }
         }
       }
       allStrapiAboutUs {
         nodes {
           seo {
             keywords
             language
             metaDescription
             metaRobots
             metaTitle
             slug
           }
         }
       }
       allStrapiCtoService {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiEcommerce {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiWebApp {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiProductDesign {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiMobileApp {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
       allStrapiEnterprise {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
           }
         }
       }
     }
   `)
    
    return data;
  }
  