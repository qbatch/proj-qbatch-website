import React from 'react';
import { useLocation } from '@reach/router';

import { Queries } from '../constants/queries';
import Divider from "../components/UiComponent/Divider";
import SEO from '../components/Seo';
import Layout from '../components/Layout/layout';
import PageNotFound from '../pages/404';
import AuthorBanner from '../components/PagesComponent/AuthorBanner/index';
import BlogCards from '../components/PagesComponent/BlogCards';
import Container from '../components/UiComponent/Container';

const Author = ({ pageContext }) => {
  const { username, name, description, img, socials, designation } = pageContext;
  const blogQuery = Queries();

  const userNode = blogQuery.allStrapiUser.nodes.find((x) => x.username === username);
  const authoredArticles = blogQuery.allStrapiArticle.nodes.filter((x) => x.user?.username === username);
  const contributedArticles = blogQuery.allStrapiArticle.nodes.filter(article => {
    return article.contributor.some(contrib => contrib.username === username);
  });

  console.log('contributes', contributedArticles)

  if (!userNode) {
    return <PageNotFound />;
  }

  const articlesData = [...authoredArticles];
  const contributedArticlesData = [...contributedArticles];

  return (
    <Layout>
      <AuthorBanner
        title={name || username}
        slug={username}
        authorImage={img?.localFile?.url}
        description={description}
        socials={socials}
        designation={designation}
        customCrumbs={[
          { pathname: `/authors/${username}/`, crumbLabel: 'Author', crumbSeparator: '>' },
          { pathname: `/authors/${username}/`, crumbLabel: name || username, crumbSeparator: '>' },
        ]}
      />
      <Container className="blog-cards-container">
        {articlesData.length > 0 && (
          <BlogCards isLoadMoreBtn={true} upperHeading={`Authored Stories by ${name || username}`} data={articlesData} />
        )}
      </Container>
      {articlesData.length > 0 && <Divider />}
      <Container className="blog-cards-container">
        {contributedArticlesData.length > 0 && (
          <BlogCards isLoadMoreBtn={true} padding="56px 0" upperHeading={`Contributed Stories by ${name || username}`} data={contributedArticlesData} />
        )}
      </Container>
      {articlesData.length > 0 &&
        <Container>
          {userNode.recommendeds?.length > 0 && (
            <BlogCards upperHeading={'Recommended Articles'} data={userNode.recommendeds.map(article => ({
              ...article,
              slug: article.seo?.slug ? article.seo.slug.replace(/^\/+|\/+$/g, '') : ''
            }))} />
          )}
        </Container>
      }
    </Layout>
  );
};

export const Head = () => {
  const location = useLocation();
  const username = location?.pathname.split('/')[2];
  const blogSeo = Queries();
  const seoData = blogSeo.allStrapiUser.nodes.find((x) => x.username === username)?.seo;

  if (!seoData) {
    return <PageNotFound />;
  }

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      pathname={`/authors/${username}/`}
    />
  );
};

export default Author;
