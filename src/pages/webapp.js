import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import WebappBanner from "../components/PagesComponent/WebappBanner";
import Achievements from "../components/PagesComponent/Achievements";
import DesiredResult from "../components/PagesComponent/IdeasAndInvestments";
import AppDevelopment from '../components/PagesComponent/AppDevelopmentService'
import WhatDifferenceQbatchMaking from '../components/PagesComponent/WhatDifferenceQbatchMaking'
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience';
import StartProject from "../components/PagesComponent/StartProject";
import SolutionToChoose from "../components/PagesComponent/SolutionToChoose";
import PeopleFirst from '../components/PagesComponent/PeopleFirst';
import YouCanTrust from "../components/PagesComponent/YouCanTrust";

const webapp = () => {
  return (
    <Layout>
      <WebappBanner />
      <Achievements page="home" innerPage={true} />
      <YouCanTrust />
      <SolutionToChoose />
      <AppDevelopment />
      <WhatDifferenceQbatchMaking
        heading="How We Make Custom Web Apps Differently"
        innerPage={true}
      />
      <DesiredResult
        heading="Is your web app failing to bring the desired result? That could be serious!"
        isButton={true}
        className="desired-result"
      />
      <ProvenWorkExperience
        heading="Success Stories"
        paragraph="They imagined it, we brought it to the world!"
      />   
      <PeopleFirst/>
      <StartProject/>
    </Layout>
  );
};
export const Head = () => <SEO title="webapp development" />;
export default webapp;
