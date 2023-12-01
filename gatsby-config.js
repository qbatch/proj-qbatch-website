const siteMetadata = {
  robots: `index,folow`,
  title: `Qbatch`,
  description: `We are busy building empires for our dear clients globally. Hire our skilled software developers for error-free code, and on-time project delivery.`,
  keywords: `hire best dedicated developers, hire dedicated software development team, dedicated mobile app development team`,
  siteUrl: `https://qbatch.com`,
  language: `en-us`,
},
env = require('dotenv').config({
  path: require('path').join(__dirname, '.env'),
})

const { STRAPI_API_URL: apiURL, STRAPI_TOKEN: accessToken } = process.env

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
  'mobile-app','cto-service','web-app','product-design', 'ecommerce','enterprise', "blog"],
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
