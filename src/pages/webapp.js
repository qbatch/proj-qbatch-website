import React from 'react';

import SEO from "../components/Seo";
import Layout from '../components/Layout/layout';
import WebappBanner from '../components/PagesComponent/WebappBanner'
import Achievements from "../components/PagesComponent/Achievements";
import AppDevelopment from '../components/PagesComponent/AppDevelopmentService'
import WhatDifferenceQbatchMaking from '../components/PagesComponent/WhatDifferenceQbatchMaking'
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience';
import StartProject from "../components/PagesComponent/StartProject";;
const webapp = () => {
  return (
    <Layout>
      <WebappBanner/>
      <Achievements page="home" innerPage={true}/>
      <AppDevelopment />
      <WhatDifferenceQbatchMaking heading='How We Make Custom Web Apps Differently' innerPage={true}/>
      <ProvenWorkExperience heading="Success Stories" paragraph="They imagined it, we brought it to the world!" />
      <StartProject/>
    </Layout>
  );
};
export const Head = () => <SEO title="webapp development" />;
export default webapp;