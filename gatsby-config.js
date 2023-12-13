const siteMetadata = {
    robots: `index,folow`,
    title: `Qbatch`,
    description: `We are busy building empires for our dear clients globally. Hire our skilled software developers for error-free code, and on-time project delivery.`,
    keywords: `hire best dedicated developers, hire dedicated software development team, dedicated mobile app development team`,
    siteUrl: `https://qbatch.com`,
    twitterUsername: `@qbatchofficial`,
    language: `en-us`,
    defaultImage: `https://cms.qbatch.com/uploads/Your_Idea_820_03532d7cf6.jpg`,
  },
  env = require("dotenv").config({
    path: require("path").join(__dirname, ".env"),
  });

const {
  STRAPI_API_URL: apiURL,
  STRAPI_TOKEN: accessToken,
  GOOGLE_TAG_ID: googleTagId,
} = process.env;
const strapiConfig = {
  apiURL,
  accessToken,
  collectionTypes: [
    'contact',
    {
      singularName: 'awards-and-recognition',
      queryParams: {
        populate: {
          awards: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'our-client',
      queryParams: {
        populate: {
          clients: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'testimonial',
      queryParams: {
        populate: '*',
      },
    },
    {
      singularName: 'our-project',
      queryParams: {
        populate: '*',
      },
    },
    {
      singularName: 'article',
      queryParams: {
        populate: '*',
      },
    },
    {
      singularName: 'home',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
          schema: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'header',
      queryParams: {
        populate: {
          logo: {
            populate: '*',
          },
        },
      },
    },
  ],
  singleTypes: [
    'home',
    'about-us',
    'mobile-app',
    'cto-service',
    'web-app',
    'product-design',
    'ecommerce',
    'enterprise',
    'contact-us',
    'portfolio',
    'faq',
    'blog',
    'header',
  ],
  queryLimit: 1000,
}
module.exports = {
  siteMetadata,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-recaptcha',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `${siteMetadata.siteUrl}`,
        sitemap: `${siteMetadata.siteUrl}/sitemap-index.xml`,
        policy: [
          { userAgent: '*', disallow: ['/cgi-bin/', '/wp-admin/'] },
          { userAgent: 'Googlebot', allow: '/' },
          { userAgent: 'googlebot-image', allow: '/' },
          { userAgent: 'googlebot-mobile', allow: '/' },
          { userAgent: 'Googlebot-News', allow: '/' },
          { userAgent: 'Googlebot-Video/1.0', allow: '/' },
          { userAgent: 'APIs-Google', allow: '/' },
          { userAgent: 'Googlebot-Image/1.0', allow: '/' },
          { userAgent: 'MSNBot', disallow: '' },
          { userAgent: 'Slurp', disallow: '' },
          { userAgent: 'Teoma', disallow: '' },
          { userAgent: 'Gigabot', disallow: '' },
          { userAgent: 'Robozilla', disallow: '' },
          { userAgent: 'Nutch', disallow: '' },
          { userAgent: 'ia_archiver', disallow: '' },
          { userAgent: 'baiduspider', disallow: '' },
          { userAgent: 'naverbot', disallow: '' },
          { userAgent: 'yeti', disallow: '' },
          { userAgent: 'yahoo-mmcrawler', disallow: '' },
          { userAgent: 'psbot', disallow: '' },
          { userAgent: 'yahoo-blogs/v3.9', disallow: '' },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: false,
        defer: false,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap-patch`,
      options: {
        query: `
          {
            allStrapiHome {
              edges {
                node {
                  id
                  slug
                  updatedAt
                }
              }
            } 
            allStrapiBlog {
              edges {
                node {
                  id
                  slug
                  updatedAt
                }
              }
            }
            allStrapiMobileApp {
              edges {
                node {
                  id
                  slug
                  updatedAt
                }
              }
            }
            allStrapiPortfolio {
              edges {
                node {
                  id
                  slug
                  updatedAt
                }
              }
            }
              allStrapiAboutUs {
              edges {
                node {
                  id
                  slug
                  updatedAt
                }
              }
            }
          }
  `,
        mapping: {
          allStrapiHome: {
            sitemap: 'home',
            // Additional mapping for 'allStrapiHome' if needed
          },
          allStrapiBlog: {
            // Corrected the mapping object
            sitemap: 'blog',
            prefix: 'your-prefix/',
          },
          allStrapiMobileApp: {
            sitemap: 'mobile-app-development',
          },
          allStrapiPortfolio: {
            sitemap: 'portfolio',
          },
          allStrapiAboutUs: {
            sitemap: 'about-us',
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/assets/images/qbatch-logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: googleTagId,
        includeInDevelopment: false,
      },
    },
  ],
}
