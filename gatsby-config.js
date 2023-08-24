require('dotenv').config();
console.log('Gatsby source-strapi API URL:', process.env.STRAPI_API_URL);
module.exports = {
  siteMetadata: {
    title: `Using Gatsby Head`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        // apiURL: `http://127.0.0.1:1337`,
        apiURL: process.env.STRAPI_API_URL,
        collectionTypes: [
          {
            singularName: 'service', // Add 'service' content type
            queryParams: {
              populate: {
                'Service_Item': {
                  populate: "*"
                },
                'categories': "*"
              },
            },
          },
          {
            singularName: 'message', // Add 'message' content type
          },
          // ... (add more content types if needed)
        ],
        contentTypes: [`service`, `message`],
        queryLimit: 1000,
      },
    },
  ],
};
