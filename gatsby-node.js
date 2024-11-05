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
       allStrapiOurProject {
        nodes {
          seo {
            metaDescription
            metaTitle
            language
            keywords
            slug
            metaRobots
            metaimage {
              localFile {
                url
              }
            }
          }
          projectQuote
          projectCover{
            localFile {
              url
            }
          }
          projectImpact{
              localFile{
                url
              }
          }
          portfolio {
            companySize
            detail
            duration
            industry
            mainHeading
            subHeading
            team
            useCase
            headQuarter
            cover {
              localFile {
                url
              }
            }
          }
          projectDetails {
            heading
            paragraph
            detailBox {
              heading
              paragraph
            }
          }
          phaseTimeline {
            phase {
              heading
              subtitle
            }
            timeline {
              timelineDuration
            }
          }
          projectComponents {
            fontFamily
            projectColors {
              primary {
                colors
              }
              secondary {
                colors
              }
              natural {
                colors
              }
            }
            projectIcons {
              localFile {
                url
              }
            }
            projectInnerComponents{
              localFile {
                url
              }
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
  const strapiProjects = result.data.allStrapiOurProject.nodes;

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
  strapiProjects.forEach((node) => {
    createPage({
      path: `/portfolio/${node?.seo?.slug}/`,
      component: path.resolve('./src/pages/portfolio/project.js'),
      context: {
        slug: node.seo?.slug,
        portfolio: node.portfolio,
        projectDetails: node.projectDetails,
        projectQuote: node.projectQuote,
        projectCover: node?.projectCover?.localFile?.url,
        projectImpact: node.projectImpact?.map(impact => impact.localFile.url),
        projectComponents: node?.projectComponents,
        phaseTimeline: node?.phaseTimeline,
        seoData: node?.seo,
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

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  const config = getConfig()
  
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
    })
  }
}
