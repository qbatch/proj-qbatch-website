import { useStaticQuery, graphql } from 'gatsby';

export const Queries = () => {
  const data = useStaticQuery(graphql`
   fragment SchemaFields on STRAPI__COMPONENT_SCHEMA_SCHEMA_STRUCTUREDDATA_JSONNODE {
    _context
    _type
    name
    description
    mainEntity {
      acceptedAnswer {
        _type
        text
      }
      _type
      name
    }
    itemListElement{
      item
      name
      _type
      position
    }
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
        _type
        height
        url
        width
      }
      name
      sameAs
      url
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


  fragment SeoFields on STRAPI__COMPONENT_SEO_SEO{
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


  fragment PageSeoFields on STRAPI__COMPONENT_SEO_SEO{
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
         schema {
           title
           visibilityIn
           childStrapiComponentSchemaSchemaStructureddataJsonnode {
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
         }
          updatedAt
          blogTitle
          blogDescription {
            data {
              blogDescription
            }
          }
          slug
          contributor {
            name
            username
            description
            image{
              localFile{
                url
              }
            }
            Socials {
              socialLink
              socialPlatform
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
               email
               description
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
             ...SeoFields
           }
         }
       }
       allStrapiTermsAndCondition {
        nodes {
          seo {
            ...SeoFields
          }
        }
      }
       allStrapiPrivacyPolicy {
        nodes {
          seo {
            ...SeoFields
          }
        }
      }
       allStrapiAboutUs {
         nodes {
           seo {
             ...SeoFields
           }
         }
       }
       allStrapiExtensionDevelopment {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...SeoFields
           }
         }
       }
       allStrapiCtoService {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...PageSeoFields
           }
         }
       }
       allStrapiDevelopementService {
        nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
          seo {
            ...SeoFields
          }
        }
      }
       allStrapiDevop {
        nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
          seo {
            ...PageSeoFields
          }
        }
      }
       allStrapiMvpDev {
        nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
          seo {
            ...PageSeoFields
          }
        }
      }
       allStrapiSaasDev {
        nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
          seo {
            ...PageSeoFields
          }
        }
      }
       allStrapiEducationDev {
        nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
          seo {
            ...PageSeoFields
          }
        }
      }
       allStrapiEcommerce {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...PageSeoFields
           }
         }
       }
       allStrapiWebApp {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
             ...PageSeoFields
           }
         }
       }
       allStrapiProductDesign {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...PageSeoFields
           }
         }
       }
       allStrapiProsperShow {
         nodes {
           seo {
             ...SeoFields
           }
         }
       }
       allStrapiWhiteLabelExpo {
         nodes {
           seo {
             ...SeoFields
           }
         }
       }
       allStrapiMobileApp {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...PageSeoFields
           }
         }
       }
       allStrapiEnterprise {
         nodes {
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...PageSeoFields
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
          schema {
            childStrapiComponentSchemaSchemaStructureddataJsonnode {
              ...SchemaFields
            }
            visibilityIn
            title
          }
           seo {
            ...PageSeoFields
           }
         }
       }
       allStrapiContactUs {
         nodes {
           seo {
             ...SeoFields
           }
         }
       }
       allStrapiHireDeveloper {
        nodes {
          seo {
            ...SeoFields
          }
        }
      }
       allStrapiHealthcare {
        nodes {
          seo {
            ...SeoFields
          }
        }
      }
      allStrapiHowWeWork {
        nodes {
          seo {
            ...SeoFields
          }
        }
      }
       allStrapiCategory {
        nodes {
          categoryName
          slug
          seo {
            ...SeoFields
          }
        }
      }
      allStrapiOurProject {
        nodes {
          portfolio {
            companySize
            detail
            duration
            industry
            mainHeading
            subHeading
            team
            useCase
            cover {
              localFile {
                url
              }
            }
            projectDetails {
              heading
              paragraph
              detailBox {
                heading
                paragraph
              }
            }
          }
        }
      }
     }
   `)

  return data;
}
