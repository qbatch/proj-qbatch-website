const siteMetadata = {
  robots: `index,follow`,
  title: ``,
  description: ``,
  keywords: ``,
  siteUrl: `https://qbatch.com`,
  twitterUsername: `@qbatchofficial`,
  language: `en-us`,
  defaultImage: `https://cms.qbatch.com/uploads/Your_Idea_820_03532d7cf6.jpg`,
};

const env = require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
});

const {
  STRAPI_API_URL: apiURL,
  STRAPI_TOKEN: accessToken,
} = process.env;

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
        populate: {
          seo: {
            populate: '*',
          },
          projectImg: true,
          projectLogo: true,
          projectCover: true,
          projectImpact: true,
          portfolio: {
            populate: {
              cover: true,
              projectImpact: {
                populate: {
                  imageBoxes: true
                }
              }
            },
          },
          projectDetails: {
            populate: {
              detailBox: '*',
            },
          },
          projectComponents: {
            populate: {
              projectIcons: true,
              projectInnerComponents: true,
              projectColors: {
                populate: "*"
              }
            },
          },
          projectCover: true,
          phaseTimeline: {
            populate: {
              phase: {
                populate: "*"
              },
              timeline: {
                populate: "*"
              }
            },
          },
        },
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
          schema: {
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
          schema: {
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
          schema: {
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
          schema: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'ecommerce-industry',
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
      singularName: 'enterprise',
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
      singularName: 'mobile-app',
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
      singularName: 'web-app',
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
      singularName: 'web-and-data-scraping',
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
      singularName: 'product-design',
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
    {
      singularName: 'hire-developer',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'retail-software-development',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'travel-app-development',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'healthcare',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'fin-tech-app-development',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'industry',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'career',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'how-we-work',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'event',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'real-estate',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'logistic',
      queryParams: {
        populate: {
          seo: {
            populate: '*',
          },
        },
      },
    },
    {
      singularName: 'extension-development',
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
      singularName: 'mvp-dev',
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
      singularName: 'saas-dev',
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
      singularName: 'education-dev',
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
  ],
  singleTypes: [
    'home',
    'about-us',
    'mobile-app',
    'cto-service',
    'web-app',
    'product-design',
    'ecommerce',
    'ecommerce-industry',
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
    'prosper-show',
    'hire-developer',
    'healthcare',
    'extension-development',
    'how-we-work'
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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
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
            allStrapiArticle {
              distinct(field: category___slug)
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiArticle } }) => {
              return allStrapiArticle.nodes.map(node => {
                return {
                  title: node.blogTitle,
                  description: node.blogDescription.data.blogDescription,
                  date: node.publishedAt,
                  url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                  custom_elements: [{ 'content:encoded': node.blogDescription.data.blogDescription }],
                };
              });
            },
            query: `
              {
                allStrapiArticle(sort: { fields: publishedAt, order: DESC }) {
                  nodes {
                    blogTitle
                    blogDescription {
                      data {
                        blogDescription
                      }
                    }
                    slug
                    publishedAt
                    seo {
                      metaDescription
                    }
                    category {
                      categoryName
                      slug
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'All Categories RSS Feed',
          },
          ...['software-development', 'cto', 'ecommerce', 'web-and-data-scraping', 'enterprise-development', 'trending'].map(categorySlug => {
            const categoryName = categorySlug.replace(/-/g, ' ').toUpperCase();
            return {
              serialize: ({ query: { site, allStrapiArticle } }) => {
                return allStrapiArticle.nodes
                  .filter(node => node.category && node.category.slug === categorySlug)
                  .map(node => {
                    return {
                      title: node.blogTitle,
                      description: node.blogDescription.data.blogDescription,
                      date: node.publishedAt,
                      url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                      guid: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                      custom_elements: [{ 'content:encoded': node.blogDescription.data.blogDescription }],
                    };
                  });
              },
              query: `
                {
                  allStrapiArticle(filter: { category: { slug: { eq: "${categorySlug}" } } }, sort: { fields: publishedAt, order: DESC }) {
                    nodes {
                      blogTitle
                      blogDescription {
                        data {
                          blogDescription
                        }
                      }
                      slug
                      publishedAt
                      seo {
                        metaDescription
                      }
                      category {
                        categoryName
                        slug
                      }
                    }
                  }
                }
              `,
              output: `/rss/${categorySlug}.xml`,
              title: `${categoryName} RSS Feed`,
            };
          }),
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          '/services/style/',
          '/authors/',
          '/blog/blogDetails/',
          '/sitemap.html',
          '/sitemap-services.html',
          '/sitemap-blog.html',
          '/sitemap-pages.html',
          '/sitemap-authors.html',
          '/sitemap-events.html',
        ],
      },
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
        name: 'Qbatch',
        short_name: 'Qbatch',
        start_url: '/',
        display: 'standalone',
        icon: './src/assets/images/fav-icon.png',
        icons: [
          {
            src: './src/assets/images/fav-icon16.png',
            sizes: '8x8',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-57x57.png',
            sizes: '57x57',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-60x60.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-70x70.png',
            sizes: '70x70',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-76x76.png',
            sizes: '76x76',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/images/favicon-310x310.png',
            sizes: '310x310',
            type: 'image/png',
          },
        ]
      },
    },
  ],
};