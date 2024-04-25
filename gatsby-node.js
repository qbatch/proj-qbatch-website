const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Your previous logic for creating static pages
  // ...

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
  `);

  if (result.errors) {
    throw result.errors;
  }

  const strapiBlogPosts = result.data.allStrapiArticle.edges;

  strapiBlogPosts.forEach(async ({ node }) => {
    await createPage({
      path: `/blog/${node?.slug}/`,
      component: path.resolve('./src/pages/blogDetails.js'),
      context: {
        title: node.slug,
      },
    });

    await createPage({
      path: `/blog/${node.category?.slug}`,
      component: path.resolve('./src/pages/blog.js'),
      context: {
        title: node.category?.categoryName,
      },
    });

    await createPage({
      path: `/authors/${node.user?.username}`,
      component: path.resolve('./src/pages/authors.js'),
      context: {
        title: node.user?.username,
        name: node.user?.name,
        description: node.user?.description,
        img: node.user?.image,
        socials: node.user?.Socials,
      },
    });
  });

  // Your logic for creating MarkdownRemark pages
  const bookTemplate = path.resolve(`src/templates/bookTemplates.js`);

  const result1 = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result1.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  strapiBlogPosts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node?.slug}/`,
      component: path.resolve('./src/pages/blogDetails.js'),
         context: {
        title: node.slug,
      },
    });
  });
};
