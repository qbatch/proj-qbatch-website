const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            seo {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const strapiBlogPosts = result.data.allStrapiArticle.edges

  strapiBlogPosts.forEach(({ node }) => {
    createPage({
      path: `/blog${node.seo.slug}`, 
      component: path.resolve('./src/pages/blogDetails.js'),
      context: {
        title: `/blog${node.seo.slug}`,
      },
    })
  })
}
