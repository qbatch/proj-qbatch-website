import * as React from 'react'
import Layout from '../components/Layout/layout'
import SEO from "../components/Seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <SEO title="About  Me" />;

export default AboutPage