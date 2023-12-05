import * as React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import CompanyBanner from "../components/PagesComponent/CompanyBanner";
import GrowthPartner from "../components/PagesComponent/GrowthPartner";
import CompanyAchievements from "../components/PagesComponent/CompanyAchievements";
import OurClients from "../components/PagesComponent/Clients";
import Leadership from "../components/PagesComponent/Leadership";
import ValueSystem from "../components/PagesComponent/ValueSystem";
import Awards from "../components/PagesComponent/Awards";
import Clients from "../components/PagesComponent/Careers";

const About = () => (
  
  <Layout>
    <CompanyBanner />
    <GrowthPartner />
    <CompanyAchievements />
    <OurClients />
    <Leadership />
    <ValueSystem />
    <Awards  maxCols={8}/>
    <Clients />
  </Layout>
);
export const Head = () => {
  const data = useStaticQuery(graphql`
    query AboutUsQuery {
      allStrapiAboutUs {
        nodes {
          seo {
            structuredData {
              _context
              _type
              name
              url
              potentialAction {
                _type
                query_input
                target
              }
            }
            keywords
            language
            metaDescription
            metaRobots
            metaTitle
            slug
          }
        }
      }
    }
  `)

  const seoData = data.allStrapiAboutUs.nodes[0]?.seo
  console.log(JSON.stringify(seoData.structuredData))
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
    >
      <script type="application/ld+json">{JSON.stringify(seoData.structuredData)}</script>
    </SEO>
  )
}

export default About;
