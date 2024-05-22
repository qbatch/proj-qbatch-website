const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/sitemap.html",
    component: require.resolve("./src/sitemap/sitemap.js"),
  });
  createPage({
    path: "/sitemap-services.html",
    component: require.resolve("./src/sitemap/sitemap-services.js"),
  });
  createPage({
    path: "/sitemap-blog.html",
    component: require.resolve("./src/sitemap/sitemap-blog.js"),
  });
  createPage({
    path: "/sitemap-pages.html",
    component: require.resolve("./src/sitemap/sitemap-pages.js"),
  });
  createPage({
    path: "/sitemap-authors.html",
    component: require.resolve("./src/sitemap/sitemap-authors.js"),
  });
  createPage({
    path: "/sitemap-events.html",
    component: require.resolve("./src/sitemap/sitemap-events.js"),
  });

  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            seo {
              slug
            }
            slug
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
    path: `/blog/${node?.slug}/`,
    component: path.resolve('./src/pages/blogDetails.js'),
    context: {
      title: node.slug,
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
