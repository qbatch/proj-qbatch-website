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
  const location = useLocation();
  const { title, name, description, img, socials } = pageContext;
  const { state } = location;
  const slug = state && state.slug;
  const blogQuery = Queries();
  const userNode = blogQuery.allStrapiUser.nodes.find((x) => x.username === title);
  const recommendedArticles = userNode?.recommendeds || [];
  const data = blogQuery.allStrapiArticle.nodes.filter((x) => x.user?.username === title);

  const recommendedWithSlug = recommendedArticles.map(article => ({
    ...article,
    slug: article.seo?.slug || ''
  }));
  const sanitizedRecommendedArticles = recommendedWithSlug.map(article => ({
    ...article,
    slug: article.slug ? article.slug.replace(/^\/+|\/+$/g, '') : '' 
  }));

  if (!recommendedArticles.length) {
    return <PageNotFound />;
  }

  return (
    <Layout>
      <AuthorBanner
        title={name}
        slug={slug}
        authorImage={img?.localFile?.url}
        description={description}
        socials={socials}
        customCrumbs={[
          { pathname: `/authors/${title}/`, crumbLabel: 'Author', crumbSeparator: '>' },
          { pathname: `/authors/${title}/`, crumbLabel: name, crumbSeparator: '>' },
        ]}
      />
      <Container className="blog-cards-container">
        <BlogCards isLoadMoreBtn={true} upperHeading={`Recent Stories by ${name}`} data={data} />
      </Container>
      <Divider />
      <Container>
        <BlogCards upperHeading={'Recommended Articles'} data={sanitizedRecommendedArticles} />
      </Container>
    </Layout>
  );
};

export const Head = () => {
  const location = useLocation();
  const authorName = location?.pathname.split('/')[2];
  const blogSeo = Queries();
  const seoData = blogSeo.allStrapiUser.nodes.find((x) => x.username === authorName)?.seo;

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
      pathname={`/authors/${authorName}/`}
    />
  );
};

export default Author;
