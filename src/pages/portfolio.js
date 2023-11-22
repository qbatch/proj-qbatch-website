import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import Divider from "../components/UiComponent/Divider";
import ServicesBanner from "../components/PagesComponent/ServicesBanner";
import Collaboration from "../components/PagesComponent/Collaboration";
import StartProject from "../components/PagesComponent/StartProject";
import SuccessStories from "../components/PagesComponent/SuccessStories";
import EcomLogoSection from "../components/PagesComponent/EcomLogoSection";

const Portfolio = () => {
  return (
    <Layout>
      <ServicesBanner />
      <EcomLogoSection />
      <SuccessStories />
      <Divider margin="0px" />
      <Collaboration />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allStrapiPortfolio {
        nodes {
          seo {
            keywords
            metaDescription
            metaTitle
          }
        }
      }
    }
  `)

  const seoData = data.allStrapiPortfolio.nodes[0]?.seo[0] 

  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keywords={seoData.keywords} />
}

export default Portfolio;