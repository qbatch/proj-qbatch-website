import React from 'react';
import { useLocation } from '@reach/router'

import { Queries } from '../constants/queries';
import SEO from '../components/Seo';
import Layout from '../components/Layout/layout';
import PageNotFound from '../pages/404';
import AuthorBanner from '../components/PagesComponent/AuthorBanner/index'
import BlogCards from '../components/PagesComponent/BlogCards'
import Container from '../components/UiComponent/Container'

const Author = ({ pageContext, location }) => {
  const { title, name, description, img, socials} = pageContext;
  const { state } = location;
  const slug = state && state.slug;
  const blogQuery = Queries();
  const recommendedArticles = blogQuery.allStrapiUser.nodes.filter((x) => x.username === title)[0]?.recommendeds;
  const data = blogQuery.allStrapiArticle.nodes.filter((x) => x.user?.username === title);

  if (!recommendedArticles) {
    return <PageNotFound />
  }
  return (
    <Layout>
      <AuthorBanner title={name} slug={slug} authorImage={img?.localFile?.url} description={description} socials={socials} />
      <Container>
        <BlogCards upperHeading={`Recent Stories by ${name}`} data={data} />
        <BlogCards upperHeading={'Recommended Articles'} data={recommendedArticles} />
      </Container>
    </Layout>
  )
}

export const Head = () => {
  const location = useLocation()
  const currentUrl = location.href
  const authorName = location?.pathname.split('/')[2]
  const url = currentUrl?.split('/')[4]
  const blogSeo = Queries()
  const seoData = blogSeo.allStrapiUser.nodes?.filter((x) => x.username === authorName)[0]?.seo

  if (!seoData) {
    return <PageNotFound />
  }

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      pathname={`/authors/${url}/`}
    />
  )
};

export default Author;
