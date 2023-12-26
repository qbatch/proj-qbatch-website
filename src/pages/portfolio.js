import React from 'react';
import { Queries } from '../constants/queries'
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import Divider from "../components/UiComponent/Divider";
import ServicesBanner from "../components/PagesComponent/ServicesBanner";
import Collaboration from "../components/PagesComponent/Collaboration";
import StartProject from "../components/PagesComponent/StartProject";
import SuccessStories from "../components/PagesComponent/SuccessStories";

const Portfolio = () => {
  return (
    <Layout>
      <ServicesBanner />
      <SuccessStories />
      <Divider margin="0px" />
      <Collaboration />
      <StartProject />
    </Layout>
  );
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