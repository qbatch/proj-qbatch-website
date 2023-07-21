import * as React from 'react'
import Layout from '../components/Layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/Seo"


const IndexPage = () => {
  return (
    <Layout>
      <p>I'm making this by following the Gatsby Tutorial.</p>
       <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Home Page"  />
)

export default IndexPage