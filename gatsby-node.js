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
            category {
              categoryName
            }
            id
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
    path: `/blog${node.seo.slug}${node.id}`,
    component: path.resolve('./src/pages/blogDetails.js'),
    context: {
      title: `/blog${node.seo.slug}${node.id}`,
    },
  });
  
  createPage({
    path: `/blog/${node.category.categoryName}`,
    component: path.resolve('./src/pages/blog.js'),
    context: {
      title: node.category.categoryName,
    },
  })
})};
