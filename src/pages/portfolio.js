import React from 'react';
import Banner from '../components/PagesComponent/PageBanner'
import { Queries } from '../constants/queries'
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import Divider from "../components/UiComponent/Divider";
import EcommerceBanner from '../../static/portfolio-banner-qbatch.svg'
import Collaboration from "../components/PagesComponent/Collaboration";
import StartProject from "../components/PagesComponent/StartProject";
import SuccessStories from "../components/PagesComponent/SuccessStories";

const Portfolio = () => {
  return (
    <Layout>
      <Banner
        subheading="CTO as a Service"
        heading="Rethink and Rebuild Your Technical Prowess"
        paragraph="Neglecting a tiny detail can lead to huge technical debts. Get high-impact technical guidance and confidently deal with time- and money-critical situations toward greater business growth."
        buttonText="Get Free CTO Consultation"
        blogInner={EcommerceBanner}
        wrapperClass="cto-banner"
      />
      <SuccessStories />
      <Divider margin="0px" />
      <Collaboration />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
    const portfolioData = Queries();
    const seoData = portfolioData?.allStrapiPortfolio.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
    />
  )
}

export default Portfolio;