const env = require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
})
const { STRAPI_API_URL: apiURL, STRAPI_TOKEN: accessToken } = process.env;

const strapiConfig = {
  apiURL,
  accessToken,
  collectionTypes: [
   "home",
   'contact', 
  {
    singularName: 'portfolio',
    queryParams: {
      populate: {
        'projects': {
          populate: "*"
        },
        'seo': "*"
      },
    },
  },
   'about-us', 
  {
    singularName: 'contact-us',
    queryParams: {
      populate: {
        'testimonials': {
          populate: "*"
        },
        'seo': "*"
      },
    },
  }, 
  'mobile-app','cto-service','web-app','product-design', 'ecommerce','enterprise', {
    singularName: 'blog',
    queryParams: {
      populate: {
        'article': {
          populate: "*"
        },
        'seo': "*",
        'category': "*"
      },
    },
  }],
  queryLimit: 1000,
}
module.exports = {
  siteMetadata: {
    robots: ``,
    title: `Qbatch`,
    description: `We are busy building empires for our dear clients globally. Hire our skilled software developers for error-free code, and on-time project delivery.`,
    keywords: `hire best dedicated developers, hire dedicated software development team, dedicated mobile app development team`,
    siteUrl: `https://www.qbtach.com`,
    httpEquiv: `en-us`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-recaptcha',
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
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
  ],
}
