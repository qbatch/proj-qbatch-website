require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: "http://localhost:1337",
  accessToken: "3cc4f55a50f7a82aa5569e3b16e2524d18c8f6c27e5d2232a4ec30515363380f57ab545049a2477d86e7be182082cd145c3d945f87a80e60446e08c435afe6a7557b392861cb9d20299ce7eb3602af9a80b8f221a6e0783d9abcfd3a93d5a9c194a2789a5d8f25b5710dd1a723ed735348a109effbc0d309dcfa8099c1183334",
   collectionTypes: [
      "restaurant",
      "category",
      "happily-makings",
      "making",
    ],
  queryLimit: 10000,
};
module.exports = {
  siteMetadata: {
    title: `Software Development Consulting Services | Qbatch`,
    description: `200+ enterprises have reaped great financial results and outreach with our time-tested software development consulting services and on-time project delivery.`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://127.0.0.1:1337",
        accessToken:
          "1aa1fa647162cf7b822d30747587880d54dd573b3d5cd5b0967b1c318a5f37b76e677eb4d329e4417558a42ce1fabf762997365ed96c1e627374f97f4948baee3a33541e1e3b8acf5796c93ff7189e2a271802921884b7e2a33ec1db027766f0344649372678ebb3e7269bab726703e58dd54fb42bb6d33e4b39badfe326a9ac",
        collectionTypes: ["restaurant", "category", "making", "happily-making"],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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
    "gatsby-plugin-apollo",
    "gatsby-plugin-image",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
  ],
};
