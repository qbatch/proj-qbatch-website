import React from 'react';

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

export const Head = () => <SEO title="Portfolio" />;

export default Portfolio;
