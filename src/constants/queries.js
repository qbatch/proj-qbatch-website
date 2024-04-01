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
           updatedAt
           blogTitle
           blogDescription {
             data {
               blogDescription
             }
           }
           user {
             username
             name
             description
             image {
               localFile {
                 url
               }
             }
              Socials {
               socialLink
               socialPlatform
              }
           }
           category {
             categoryName
             slug
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
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiTermsAndCondition {
        nodes {
          seo {
            metaTitle
            metaRobots
            metaDescription
            language
            keywords
            slug
            metaimage {
              localFile {
                url
              }
            }
          }
        }
      }
       allStrapiPrivacyPolicy {
        nodes {
          seo {
            metaTitle
            metaRobots
            metaDescription
            language
            keywords
            slug
            metaimage {
              localFile {
                url
              }
            }
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
             metaimage {
               localFile {
                 url
               }
             }
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
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiDevelopementService {
        nodes {
          seo {
            metaTitle
            metaRobots
            slug
            metaDescription
            language
            keywords
            metaimage {
              localFile {
                url
              }
            }
          }
        }
      }
       allStrapiDevop {
        nodes {
          seo {
            metaTitle
            metaRobots
            slug
            metaDescription
            language
            keywords
            metaimage {
              localFile {
                url
              }
            }
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
             metaimage {
               localFile {
                 url
               }
             }
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
             metaimage {
               localFile {
                 url
               }
             }
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
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiProsperShow {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiWhiteLabelExpo {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
             metaimage {
               localFile {
                 url
               }
             }
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
             metaimage {
               localFile {
                 url
               }
             }
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
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiUser {
         nodes {
           username
           recommendeds {
             blogTitle
             blogDescription {
               data {
                 blogDescription
               }
             }
             user {
               username
               name
               description
               image {
                 localFile {
                   url
                 }
               }
             }
             category {
               categoryName
               slug
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
           seo {
             metaTitle
             metaDescription
             metaRobots
             slug
           }
         }
       }
       allStrapiWebAndDataScraping {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiContactUs {
         nodes {
           seo {
             metaTitle
             slug
             metaRobots
             metaDescription
             language
             keywords
             metaimage {
               localFile {
                 url
               }
             }
           }
         }
       }
       allStrapiCategory {
        nodes {
          categoryName
          slug
          seo {
            metaTitle
            metaDescription
            language
            slug
            keywords
            metaRobots
            metaimage {
              localFile {
                url
              }
            }
          }
        }
      }
     }
   `)
    
    return data;
  }
  