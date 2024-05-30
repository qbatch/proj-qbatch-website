const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
