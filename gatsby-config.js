module.exports = {
  siteMetadata: {
    robots: `index, follow`,
    title: `Hire Skilled Dedicated Developers | Qbatch`,
    description: `We are busy building empires for our dear clients globally. Hire our skilled software developers for error-free code, and on-time project delivery.`,
    keywords: `hire best dedicated developers, hire dedicated software development team, dedicated mobile app development team`,
    siteUrl: `https://eclectic-palmier-c4e68a.netlify.app/`,
    httpEquiv: `en-us`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
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
  ],
}
