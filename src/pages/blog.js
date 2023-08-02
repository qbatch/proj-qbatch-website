import * as React from 'react'
import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'


const BlogPage = () => {
    
  return (
    <Layout pageTitle="My Blog Posts">
    </Layout>
  )
}
export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage