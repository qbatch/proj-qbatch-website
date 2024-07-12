const path = require('path');

const createBlogPages = async (graphql, actions) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            seo {
              slug
            }
            slug
            contributor {
              name
              username
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
      allStrapiUser {
        edges{
          node {
            username
            name
            description
            designation
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
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const strapiBlogPosts = result.data.allStrapiArticle.edges;
  const strapiUsers = result.data.allStrapiUser.edges;

  strapiBlogPosts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node?.slug}/`,
      component: path.resolve('./src/pages/blog/blogDetails.js'),
      context: {
        title: node.slug,
      },
    });

    createPage({
      path: `/blog/${node.category?.slug}`,
      component: path.resolve('./src/pages/blog/index.js'),
      context: {
        title: node.category?.categoryName,
      },
    });
  });

  strapiUsers.forEach(({ node }) => {
    createPage({
      path: `/authors/${node.username}/`,
      component: path.resolve('./src/pages/authors.js'),
      context: {
        username: node.username,
        name: node.name,
        description: node.description,
        img: node.image,
        socials: node.Socials,
        designation: node.designation
      },
    });
  });
};

const createSitemapPages = (actions) => {
  const { createPage } = actions;

  const sitemapPages = [
    { path: "/sitemap.html", component: "./src/sitemap/sitemap.js" },
    { path: "/sitemap-services.html", component: "./src/sitemap/sitemap-services.js" },
    { path: "/sitemap-blog.html", component: "./src/sitemap/sitemap-blog.js" },
    { path: "/sitemap-pages.html", component: "./src/sitemap/sitemap-pages.js" },
    { path: "/sitemap-authors.html", component: "./src/sitemap/sitemap-authors.js" },
    { path: "/sitemap-events.html", component: "./src/sitemap/sitemap-events.js" },
  ];

  sitemapPages.forEach(({ path, component }) => {
    createPage({
      path,
      component: require.resolve(component),
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages(graphql, actions);
  createSitemapPages(actions);
};
