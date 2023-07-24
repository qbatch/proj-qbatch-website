import * as React from 'react'
import Layout from '../components/Layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/Seo"

const IndexPage = () => {

  return (
    <Layout>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Home Page"  />
)

export default IndexPage;
