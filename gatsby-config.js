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
  GOOGLE_TAG_ID: googleTagId,
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
    'extension-development'
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
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
        icon: './src/assets/images/fav-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: googleTagId,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'Cache-Control: public, max-age=0, must-revalidate',
          ],
          '/static/*': [
            'Cache-Control: public, max-age=31536000, immutable',
          ],
          '/sw.js': [
            'Cache-Control: public, max-age=0, must-revalidate',
          ],
        },
        mergeCachingHeaders: true,
      },
    },
  ],
};