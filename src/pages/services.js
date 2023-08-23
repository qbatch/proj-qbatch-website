import React from 'react';

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import Divider from "../components/UiComponent/Divider";
import ServicesBanner from "../components/PagesComponent/ServicesBanner";
import Collaboration from "../components/PagesComponent/Collaboration";
import StartProject from "../components/PagesComponent/StartProject";
import SuccessStories from "../components/PagesComponent/SuccessStories"

const Services = () => {
  return (
    <Layout>
       <ServicesBanner /> 
       <SuccessStories/>
       <Collaboration />
       <Divider margin="0px" />
       <StartProject />
    </Layout>
  )
}

export const Head = () => <SEO title="Company" />;

export default Services;
