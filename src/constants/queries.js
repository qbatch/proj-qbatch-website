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
           slug
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
               structuredData {
                strapi_json_value {
                  _context
                  _type
                    image {
                  _type
                  height
                  url
                  width
                }
                   author {
              url
              name
              _type
              sameAs
              alumniOf {
                Name
                _type
              }
              jobTitle
              knowsAbout
              description
              honorificSuffix
            }
             headline
            keywords
               publisher {
              url
              logo {
                _type
                height
                url
                width
              }
            }
            description
             datePublished
            dateModified
             mainEntityOfPage {
              _id
              _type
              breadcrumb {
                _type
                itemListElement {
                  _type
                  item
                  name
                  position
                }
              }
             }
                }
              }
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
       allStrapiExtensionDevelopment {
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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
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
<<<<<<< HEAD
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              _context
              _type
              name
              description
              provider {
                _type
                brand {
                  _type
                  name
                }
                contactPoint {
                  _type
                  areaServed
                  availableLanguage
                  contactType
                  telephone
                }
                logo
                name
                sameAs
                url
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
=======
          seo {
            metaTitle
            metaRobots
            slug
            metaDescription
            language
            keywords
            structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
>>>>>>> 47e41bdfc05a2e1f88a4ffd1eb51234ef8b053b1
                  _type
                  height
                  url
                  width
                }
<<<<<<< HEAD
                name
                sameAs
                url
=======
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
>>>>>>> 47e41bdfc05a2e1f88a4ffd1eb51234ef8b053b1
              }
              serviceType
              audience {
                _type
                audienceType
              }
              serviceOutput
              slogan
              additionalType
              category
            }
            visibilityIn
            title
          }
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
            structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
            keywords
            metaimage {
              localFile {
                url
              }
            }
          }
        }
      }
       allStrapiMvpDev {
        nodes {
          seo {
            metaTitle
            metaRobots
            slug
            metaDescription
            language
                structuredData {
          name
          description
          slogan
          mainEntity {
            provider {
              _type
              logo
              name
              url
            }
            areaServed {
              _type
              name
            }
            serviceType
            serviceAudience {
              _type
              audienceType
            }
            serviceOutput
          }
          contactPoint {
            _type
            contactOption
            contactType
            telephone
          }
          brand {
            _type
            location
            logo {
              _type
              height
              url
              width
            }
            name
            sameAs
            url
          }
          potentialAction {
            _type
            query_input
            target
          }
        }
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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }

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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
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
             structuredData {
              name
              description
              slogan
              mainEntity {
                provider {
                  _type
                  logo
                  name
                  url
                }
                areaServed {
                  _type
                  name
                }
                serviceType
                serviceAudience {
                  _type
                  audienceType
                }
                serviceOutput
              }
              contactPoint {
                _type
                contactOption
                contactType
                telephone
              }
              brand {
                _type
                location
                logo {
                  _type
                  height
                  url
                  width
                }
                name
                sameAs
                url
              }
              potentialAction {
                _type
                query_input
                target
              }
            }
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
       allStrapiHireDeveloper {
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
  