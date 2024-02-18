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
              slug
            }
            user {
              username
              description
              image {
                localFile {
                  url
                }
              }
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
    path: `/blog${node.seo?.slug}`,
    component: path.resolve('./src/pages/blogDetails.js'),
    context: {
      title: node.seo?.slug,
    },
  })
  
  createPage({
    path: `/blog/${node.category?.slug}`,
    component: path.resolve('./src/pages/blog.js'),
    context: {
      title: node.category?.categoryName,
    },
  })

   createPage({
     path: `/authors/${node.user?.username}`,
     component: path.resolve('./src/pages/authors.js'),
     context: {
       title: node.user?.username,
       description: node.user?.description,
       img: node.user?.image,
     },
   })
  
})};
