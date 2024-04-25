const { resolve } = require('path');

const siteMetadata = {
  robots: `index,folow`,
  title: ``,
  description: ``,
  keywords: ``,
  siteUrl: `https://qbatch.com`,
  twitterUsername: `@qbatchofficial`,
  language: `en-us`,
  defaultImage: `https://cms.qbatch.com/uploads/Your_Idea_820_03532d7cf6.jpg`,
};

  env = require('dotenv').config({
    path: require('path').join(__dirname, '.env'),
  })

const { STRAPI_API_URL: apiURL, STRAPI_TOKEN: accessToken, GOOGLE_TAG_ID: googleTagId } = process.env

const strapiConfig = {
  apiURL,
  accessToken,
  collectionTypes: [
    'contact',
    'book-meeting',
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
      publicationState: process.env.GATSBY_ENV === "staging" ? "preview" : "live",
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
    {
      singularName: 'user',
      queryParams: {
        populate: '*',
      },
    },
    {
      singularName: 'cto-service',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'developement-service',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'devop',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'ecommerce',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'enterprise',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'mobile-app',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'web-app',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'web-and-data-scraping',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'product-design',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'about-us',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'portfolio',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'contact-us',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'requirement',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'prosper-show',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'category',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'white-label-expo',
      queryParams: {
        populate: {
          seo: {
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
    'service',
    'privacy-policy',
    'web-and-data-scraping',
    'terms-and-condition',
    'prosper-show'
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
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        name: `blogDetails`,
        path: `${__dirname}/src/blogDetails`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
            strapiArticle {
              slug
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark,strapiArticle } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt ,
                  url: site.siteMetadata.siteUrl + '/blog/' + strapiArticle.slug ,
                  guid: site.siteMetadata.siteUrl + '/blog/' +  strapiArticle.slug,
                })
              })
            },
            query: `
              {
                allMarkdownRemark {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                      }
                    }
                  }
                }
              }
              
            `,
            output: "/rss.xml",
            title: "Qbatch's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          '/services/style/',
          '/authors/',
          '/blogDetails/',
          '/sitemap.html',
          '/sitemap-services.html',
          '/sitemap-blog.html',
          '/sitemap-pages.html',
          '/sitemap-authors.html',
          '/sitemap-events.html',
        ]
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: `${siteMetadata.siteUrl}/sitemap-0.xml`,
        host: '',
        exclude: [
          '/blogDetails',
        ],
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
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: false,
        defer: false,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`,
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
        icon: './src/assets/images/qbatch-favicon.png',
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
