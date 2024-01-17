import React from 'react'
import AuthorBanner from '../components/PagesComponent/AuthorBanner/index'
import BlogCards from '../components/PagesComponent/BlogCards'
import Container from '../components/UiComponent/Container'
import { Queries } from '../constants/queries'

import Layout from '../components/Layout/layout'

const Author = ({ pageContext, location }) => {
  const {title,description,img}=pageContext;
  const { state } = location
  const slug = state && state.slug
  const blogQuery = Queries()
  const recommendedArticles = blogQuery.allStrapiUser.nodes.filter((x) => x.username === title)[0].recommendeds
  const data = blogQuery.allStrapiArticle.nodes.filter((x) => x.user.username === title)
  return (
    <Layout>
      <AuthorBanner title={title} slug={slug} authorImage={img?.localFile?.url} description={description} />
      <Container>
        <BlogCards upperHeading={`Recent Stories by ${title}`} data={data} />
        <BlogCards upperHeading={'Recommended Articles'} data={recommendedArticles} />
      </Container>
    </Layout>
  )
}

export default Author
