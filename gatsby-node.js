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
              name
              description
              image {
                localFile {
                  url
                }
              }
              Socials {
                socialLink
                socialPlatform
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
      name: node.user?.name,
      description: node.user?.description,
      img: node.user?.image,
      socials: node.user?.Socials,
    },
  })
  
})};
