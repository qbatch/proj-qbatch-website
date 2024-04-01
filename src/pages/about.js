import * as React from "react";

import { Queries } from '../constants/queries'
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
  const aboutUsData = Queries()
  const seoData = aboutUsData.allStrapiAboutUs.nodes[0]?.seo
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
      image={seoData.metaimage[0].localFile?.url}
    />
  )
}

export default About;
