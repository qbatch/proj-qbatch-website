import React from 'react'
import AuthorBanner from '../components/PagesComponent/AuthorBanner/index'
import BlogCards from '../components/PagesComponent/BlogCards'
import Container from '../components/UiComponent/Container'
import { Queries } from '../constants/queries'

import Layout from '../components/Layout/layout'

const Author = ({ pageContext, location }) => {
  const path = pageContext?.title
  const { state } = location
  const slug = state && state.slug
  const blogQuery = Queries()
  const data = blogQuery.allStrapiArticle.nodes.filter((x) => x.user.username === path)
  return (
    <Layout>
      <AuthorBanner data={data} slug={slug} />
      <Container>
      <BlogCards upperHeading={`Recent Stories by ${path}`} data={data} />
      </Container>
    </Layout>
  )
}

export default Author